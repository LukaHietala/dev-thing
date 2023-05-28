import type { NextPage } from "next";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: posts, isLoading } = api.post.getAll.useQuery();

  return (
    <>
      <h2>posts:</h2>
      {isLoading && (
        <div>
          <span>Loading...</span>
        </div>
      )}
      {posts?.length === 0 && !isLoading && (
        <div>
          <span>No posts found.</span>
        </div>
      )}
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
