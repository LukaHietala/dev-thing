import { useRouter } from "next/router";

import { api } from "~/utils/api";

const QuestionPage = () => {
  const router = useRouter();
  const { questionId } = router.query;

  const {
    data: question,
    isLoading,
    isError,
    error,
  } = api.question.getOne.useQuery({
    id: questionId as string,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <h1>Question: {questionId}</h1>
      <pre>{JSON.stringify(question, null, 2)}</pre>
    </div>
  );
};

export default QuestionPage;
