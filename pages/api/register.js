import nextConnect from "next-connect";
import RetrieveAccessToken from "@middlewares/RetrieveAccessToken";
import dbConnect from "@lib/middlewares/dbConnect";
import User from "@models/User";
import { session } from "next-auth/client";

const handler = nextConnect();

dbConnect();

handler.use(RetrieveAccessToken);

handler.get(async (req, res) => {
  const sessionData = await session({ req });
  try {
    userCount = await User.countDocuments();
    const isAdmin = userCount == null;

    const user = new User({
      username: sessionData.user.name,
      email: sessionData.user.email,
      image: sessionData.user.image,
      accessToken: sessionData.accessToken,
      isAdmin,
    });

    const createdUser = await user.save();
  } catch (error) {
    console.log(error);
    // TODO create error page
    res.writeHead(301, { Location: "/register/error" });
    res.end();
  }

  res.writeHead(301, { Location: "/me" });
  res.end();
});

export default handler;
