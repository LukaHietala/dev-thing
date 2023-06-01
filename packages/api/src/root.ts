import { authRouter } from "./router/auth";
import { questionRouter } from "./router/questions";
import { tagRouter } from "./router/tags";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  question: questionRouter,
  tag: tagRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
