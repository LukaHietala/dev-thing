import { type NextPage } from "next";
import { useRouter } from "next/router";

const AuthError: NextPage = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Error</h1>
      <p>{error}</p>
    </div>
  );
};

export default AuthError;
