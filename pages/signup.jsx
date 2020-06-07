import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { useCurrentUser } from "../lib/hooks";
const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace("/");
  }, [user]);

  // form values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUpButtonHandler = async () => {
    // e.preventDefault();
    // const body = {
    //   email: e.currentTarget.email.value,
    //   name: e.currentTarget.name.value,
    //   password: e.currentTarget.password.value,
    // };
    // const res = await fetch("/api/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });
    // if (res.status === 201) {
    //   const userObj = await res.json();
    //   mutate(userObj);
    // } else {
    //   setErrorMsg(await res.text());
    // }
  };

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <form className="form-signin col-xl-4 offset-xl-4 p-3">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
        </div>

        <div className="form-group">
          <label htmlFor="name-signup">Username</label>
          <input
            type="text"
            className="form-control"
            id="name-signup"
            placeholder="Enter usename"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email-signup">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-signup"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password-signup">Password</label>
          <input
            type="password"
            className="form-control"
            id="password-signup"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-lg btn-info btn-block"
          type="button"
          onClick={SignUpButtonHandler}
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default SignupPage;