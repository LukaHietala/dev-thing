import type { NextPage } from "next";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: posts, isLoading } = api.post.getAll.useQuery();

  return (
    <>
      {isLoading && (
        <div>
          <span>Loading...</span>
        </div>
      )}
      {posts?.length === 0 && !isLoading && (
        <div>
          <span>No questions found.</span>
        </div>
      )}
      <h2>posts:</h2>
      {posts?.map((post) => (
        // no styles for now
        <div key={post.id} className="mt-4">
          <Link href={`/posts/${post.id}`}>
            <span>{post.title}</span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Home;
