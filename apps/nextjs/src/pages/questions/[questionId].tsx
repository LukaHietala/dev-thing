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
    <div className="flex flex-col gap-4">
      <h1>title: {question.title}</h1>
      <p>content: {question.content}</p>
      <p>created at: {question.createdAt.toISOString()}</p>
      <p>author: {question.author.name}</p>
      <p>votes: {question.votes}</p>
      <div>
        <h2>Tags</h2>
        {question.tags.map((tag) => (
          <div key={tag.id}>
            <p>name: {tag.name}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Answers</h2>
        {question.answers.map((answer) => (
          <div key={answer.id}>
            <p>content: {answer.content}</p>
            <div>
              <h2>answer comments:</h2>
              {answer.comments.map((comment) => (
                <div key={comment.id}>
                  <p>content: {comment.content}</p>
                  <p>created at: {comment.createdAt.toISOString()}</p>
                  <p>author: {comment.author.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Comments</h2>
        {question.comments.map((comment) => (
          <div key={comment.id}>
            <p>content: {comment.content}</p>
            <p>created at: {comment.createdAt.toISOString()}</p>
            <p>author: {comment.author.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
