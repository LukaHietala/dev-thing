import "../styles/globals.css";
import type { AppType } from "next/app";
import { Inter } from "next/font/google";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";
import MainLayout from "~/components/main-layout";

const inter = Inter({
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <style jsx global>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
        }
      `}</style>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
