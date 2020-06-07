import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";

export default ({ children }) => {
  const [session, loading] = useSession();

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-indigo">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">Navbar</a>
            </Link>
            <div>
              {!session && (
                <Link href="/api/auth/signin">
                  <a className="text-white">Sign in</a>
                </Link>
              )}
              {session && (
                <Link href="/api/auth/signout">
                  <a className="text-white">Sign out</a>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>
      <footer></footer>
    </>
  );
};
