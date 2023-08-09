import { NavLinks } from "@/constants";
import AuthProvider from "./AuthProvider";
import { getCurrentUser } from "@/lib/session";
import ProfileMenu from "./ProfileMenu";

import Link from "next/link";
import Button from "./Button";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <h1 className="font-borel text-3xl">Drizzle</h1>
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4 ">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href="/create-project">
              <Button title='Share Work' />
              </Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
