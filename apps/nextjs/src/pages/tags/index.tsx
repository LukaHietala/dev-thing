import { useState } from "react";
import Link from "next/link";

import { api } from "~/utils/api";

const TagsPage = () => {
  const [search, setSearch] = useState("");

  const { data: tags, isLoading, error, isError } = api.tag.getAll.useQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  if (!tags) {
    return <div>No tags found</div>;
  }
  return (
    <div className="mx-auto max-w-4xl">
      <h1>Tags</h1>
      <h2 className="my-2">actions:</h2>
      <div className="mb-2 flex flex-row gap-2">
        <Link href="/tags/create">create</Link>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="grid w-full grid-cols-3 gap-4">
        {tags
          .filter((tag) => tag.name.includes(search))
          .map((tag) => (
            <div key={tag.id}>
              <Link href={`/tags/${tag.id}`}>name: {tag.name}</Link>
              <p>created at: {tag.createdAt.toISOString()}</p>
              <p>questions count: {tag._count.questions}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TagsPage;
