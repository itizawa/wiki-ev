import nextConnect from "next-connect";
import normalizeEmail from "validator/lib/normalizeEmail";
import bcrypt from "bcryptjs";
import validator from "validator";
// import middleware from "../../middlewares/middleware";
import ApiValidator from "@middlewares/ApiValidator";
import { body } from "express-validator";

const handler = nextConnect();

// handler.use(middleware);
validator.signUpUser = [
  body("username").isString().isLength({ min: 4, max: 10 }),
  body("email").isEmail(),
];

handler.post(validator.signUpUser, ApiValidator, async (req, res) => {
  const { name, password } = req.body;
  const email = normalizeEmail(req.body.email);
  const hashedPassword = await bcrypt.hash(password, 10);
  return res.status(200).json({});
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
