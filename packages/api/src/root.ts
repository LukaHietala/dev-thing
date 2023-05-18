import { authRouter } from "./router/auth";
import { questionRouter } from "./router/questions";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  question: questionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
