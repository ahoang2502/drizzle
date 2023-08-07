import { NavLinks } from "@/constants";
import AuthProvider from "./AuthProvider";

import Link from "next/link";

const Navbar = () => {
  const session = {};

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <h1 className="font-borel text-3xl">Drizzle</h1>
        </Link>
        <ul className="md:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4 ">
        {session ? (
          <>
            UserPhoto <Link href="/create-project">Share work</Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
