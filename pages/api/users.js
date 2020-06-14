import nextConnect from "next-connect";
import normalizeEmail from "validator/lib/normalizeEmail";
import validator from "validator";
import ApiValidator from "@middlewares/ApiValidator";
import RetrieveAccessToken from "@middlewares/RetrieveAccessToken";
import { body } from "express-validator";
import dbConnect from "@lib/middlewares/dbConnect";
import User from "@models/User";

const handler = nextConnect();

dbConnect();

handler.use(RetrieveAccessToken);

validator.signUpUser = [
  body("username").isString().isLength({ min: 4, max: 20 }),
  body("email").isEmail(),
  body("password").isString().isLength({ min: 6 }),
];

handler.post(validator.signUpUser, ApiValidator, async (req, res) => {
  const { username, password } = req.body;
  const email = normalizeEmail(req.body.email);
  const hashedPassword = await bcrypt.hash(password, 10);
  let createdUser;

  try {
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    const createdUser = await user.save();
  } catch (error) {
    return res.status(500).json(error);
  }

  return res.status(201).json({ createdUser });
});

handler.put(async (req, res) => {
  try {
    console.log(req.accessToken);
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default handler;
