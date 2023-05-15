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
    <nav className="flex items-baseline bg-background py-2 align-middle shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
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
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Users
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/posts" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Posts
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/tags" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Tags
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/organizations" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Organizations
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
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
      </div>
    </nav>
  );
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto mt-8 w-full max-w-7xl flex-grow">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
