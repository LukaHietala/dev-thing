import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const tagRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.tag.findMany({
      include: {
        _count: {
          select: {
            questions: true,
          },
        },
        questions: {
          include: {
            author: true,
            tags: true,
            _count: {
              select: {
                answers: true,
                comments: true,
              },
            },
          },
        },
      },
    });
  }),
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const { id } = input;
      return ctx.prisma.tag.findUnique({
        where: {
          id: id,
        },
        include: {
          questions: {
            include: {
              author: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                },
              },
              tags: true,
              _count: {
                select: {
                  answers: true,
                  comments: true,
                },
              },
            },
          },
          moderators: true,
        },
      });
    }),
});
