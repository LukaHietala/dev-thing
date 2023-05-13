import type { NextPage } from "next";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";

import { api } from "~/utils/api";
import { Button } from "~/components/ui/button";

const Navbar: React.FC = () => {
  const { data: session } = api.auth.getSession.useQuery();
  return (
    <nav className="flex h-16 items-center justify-between bg-background px-4 shadow-sm">
      <div className="flex items-center">
        <div className="ml-4 flex items-center md:ml-6">
          {session && (
            <Button variant={"outline"} onClick={() => void signOut()}>
              Sign out
            </Button>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 flex items-center md:ml-6">
          {session ? (
            <Image
              width={40}
              height={40}
              src={session?.user?.image || ""}
              alt="profile img"
              className="h-auto w-10 rounded-full border-2 border-primary object-cover"
            />
          ) : (
            <Button variant={"outline"} onClick={() => void signIn()}>
              Sign in
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
