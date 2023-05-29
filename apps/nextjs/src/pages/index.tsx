import type { NextPage } from "next";
import Link from "next/link";

import { api } from "~/utils/api";
import { useToast } from "~/components/ui/use-toast";

const Home: NextPage = () => {
  const { data: questions, isLoading } = api.question.getAll.useQuery();
  const { toast } = useToast();

  return (
    <>
      <h2>questions:</h2>
      <Link href="/questions/create">Create a new question</Link>
      {isLoading && (
        <div>
          <span>Loading...</span>
        </div>
      )}
      {questions?.length === 0 && !isLoading && (
        <div>
          <span>No questions found.</span>
        </div>
      )}
      {questions?.map((question) => (
        // no styles for now
        <div key={question.id}>
          <Link href={`/questions/${question.id}`}>
            <span>{question.title}</span>
          </Link>
        </div>
      ))}
      <button
        onClick={() => {
          toast({
            title: "Toast title",
            description: "This is a description",
            action: (
              <button
                onClick={() => {
                  console.log("clicked");
                }}
              >
                Click me
              </button>
            ),
          });
        }}
      >
        Get some toast 🍞
      </button>
    </>
  );
};

export default Home;
