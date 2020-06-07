import { session } from "next-auth/client";

class RetrieveAccessToken {
  constructor() {
    return async (req, res, next) => {
      const sessionData = await session({ req });

      if (sessionData != null) {
        req.accessToken = sessionData.accessToken;
      }

      return next();
    };
  }
}

module.exports = new RetrieveAccessToken();
