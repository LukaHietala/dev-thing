import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col gap-2 underline">
      <Link href="/questions">Questions</Link>
      <Link href="/tags">Tags</Link>
    </main>
  );
};

export default Home;
