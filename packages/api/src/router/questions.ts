import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const questionRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.question.findMany({
      include: {
        _count: {
          select: {
            answers: true,
            comments: true,
          },
        },

        author: {
          select: {
            name: true,
            id: true,
            image: true,
          },
        },
        tags: {
          select: {
            name: true,
            id: true,
          },
        },
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
              comments: {
                include: {
                  author: {
                    select: {
                      id: true,
                      name: true,
                      image: true,
                    },
                  },
                },
              },
            },
          },
          author: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
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
