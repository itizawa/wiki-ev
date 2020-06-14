import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";

function Page() {
  const [session] = useSession();

  return (
    <>
      hoge
      {session && <p>{session.user.name}</p>}
    </>
  );
}
export default Page;
