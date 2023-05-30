import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const questionRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.question.findMany({
      include: {
        answers: true,
        author: true,
        tags: true,
      },
    });
  }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const { title, content } = input;
      return ctx.prisma.question.create({
        data: {
          title: title,
          content: content,
          author: {
            connect: {
              id: ctx.session?.user.id,
            },
          },
        },
      });
    }),
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const { id } = input;
      return ctx.prisma.question.findUnique({
        where: {
          id: id,
        },
        include: {
          answers: {
            include: {
              author: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                },
              },
              comments: true,
            },
          },
          author: true,
          tags: true,
          comments: {
            include: {
              author: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });
    }),
});
