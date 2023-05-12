import type { NextPage } from "next";
import { signIn, signOut } from "next-auth/react";

import { api } from "~/utils/api";
import { Button } from "~/components/ui/button";

const Navbar: React.FC = () => {
  const { data: session } = api.auth.getSession.useQuery();
  return (
    <nav className="flex h-16 items-center justify-between bg-background px-4 shadow-sm">
      <div className="flex items-center">
        <div className="ml-4 flex items-center md:ml-6">
          <Button
            variant={"outline"}
            onClick={session ? () => void signOut() : () => void signIn()}
          >
            {session ? "Sign out" : "Sign in"}
          </Button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 flex items-center md:ml-6">
          <img
            src={session?.user?.image || ""}
            alt="profile img"
            className="h-auto w-10 rounded-full border-2 border-primary object-cover"
          />
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
