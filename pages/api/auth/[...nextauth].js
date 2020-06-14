import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  site: process.env.SITE || "http://localhost:3000",
  providers: [
    // Providers.Email({
    //   // SMTP connection string or nodemailer configuration object https://nodemailer.com/
    //   server: process.env.EMAIL_SERVER,
    //   // Email services often only allow sending email from a valid/verified address
    //   from: process.env.EMAIL_FROM,
    // }),
    // When configuring oAuth providers make sure you enabling requesting
    // permission to get the users email address (required to sign in)
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Providers.Facebook({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // Providers.Twitter({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),
    // Providers.GitHub({
    //   clientId: "ef1d8402175e4ff95fe8",
    //   clientSecret: "d586040128bd938a5f197da132120c5bd35fd8ae",
    // }),
  ],
  database: process.env.MONGO_URI || "mongodb://localhost:27017/test",

  jwt: true,

  sessionMaxAge: 30 * 24 * 60 * 60 * 1000, // Expire sessions after 30 days of being idle
  sessionUpdateAge: 24 * 60 * 60 * 1000, // Update session expiry only if session was updated more recently than the last 24 hours
  // debug: true, // Use this option to enable debug messages in the console
  pages: {
    error: "/auth/error", // Error code passed in query string as ?error=
    newUser: "/me", // If set, new users will be directed here on first sign in
  },
};

export default (req, res) => NextAuth(req, res, options);
