import { api } from "~/utils/api";

const TagsPage = () => {
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
    <div>
      <h1>Tags</h1>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-3 gap-4">
        {tags.map((tag) => (
          <div key={tag.id}>
            <p>name: {tag.name}</p>
            <p>created at: {tag.createdAt.toISOString()}</p>
            <p>questions count: {tag._count.questions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
