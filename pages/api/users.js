import nextConnect from "next-connect";
import isEmail from "validator/lib/isEmail";
import normalizeEmail from "validator/lib/normalizeEmail";
import bcrypt from "bcryptjs";
import middleware from "../../middlewares/middleware";
import { extractUser } from "../../lib/api-helpers";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const { name, password } = req.body;
  const email = normalizeEmail(req.body.email);
  if (!isEmail(email)) {
    return res.status(400).send("The email you entered is invalid.");
  }
  if (!password || !name) {
    return res.status(400).send("Missing field(s)");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  return res.status(200);
  // const user = await req.db
  //   .collection("users")
  //   .insertOne({
  //     _id: nanoid(12),
  //     email,
  //     password: hashedPassword,
  //     name,
  //     emailVerified: false,
  //     bio: "",
  //     profilePicture: null,
  //   })
  //   .then(({ ops }) => ops[0]);
  // req.logIn(user, (err) => {
  //   if (err) throw err;
  //   res.status(201).json({
  //     user: extractUser(req),
  //   });
  // });
});

export default handler;
