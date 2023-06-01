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
});
