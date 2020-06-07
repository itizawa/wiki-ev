import React from "react";
import Link from "next/link";

export default ({ children }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-indigo">
          <Link href="/">
            <a className="navbar-brand">Navbar</a>
          </Link>
          <div>
            <Link href="/login">
              <a className="text-white">Sign in</a>
            </Link>
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>
      <footer></footer>
    </>
  );
};
