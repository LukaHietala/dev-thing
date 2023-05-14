import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

import { api } from "~/utils/api";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const { data: session } = api.auth.getSession.useQuery();
  return (
    <nav className="flex h-16 items-center justify-between bg-background px-4 shadow-sm">
      <div className="flex items-center">
        <div className="ml-4 flex items-center md:ml-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/users" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Users
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/posts" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Posts
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/tags" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Tags
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/organizations" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Organizations
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
