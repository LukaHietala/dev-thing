import { useRouter } from "next/router";

import { api } from "~/utils/api";

const TagPage = () => {
  const router = useRouter();
  const { tagId } = router.query;

  const {
    data: tag,
    isError,
    isLoading,
    error,
  } = api.tag.getOne.useQuery({ id: tagId as string });

  if (!tag && !isLoading) {
    return <div>Tag not found.</div>;
  }

  return (
    <div>
      TagPage: {tagId}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      <div>
        <pre>{JSON.stringify(tag, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TagPage;
