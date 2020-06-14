import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";
import PersonalDropdown from "@components/molecules/PersonalDropdown";

export default ({ children }) => {
  const [session, loading] = useSession();

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <Link href="/">
            <a className="navbar-brand">Wiki EV</a>
          </Link>
          {!loading && (
            <div>
              {!session && (
                <Link href="/api/auth/signin">
                  <a className="text-white">Sign in</a>
                </Link>
              )}
              {session && <PersonalDropdown />}
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>
      <footer></footer>
    </>
  );
};
