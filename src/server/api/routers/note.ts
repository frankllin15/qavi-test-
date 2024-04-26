import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const noteRouter = createTRPCRouter({
  getNotes: protectedProcedure.query(({ ctx }) => {
    return ctx.db.note.findMany({
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),
  createNote: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.note.create({
        data: {
          createdBy: { connect: { id: ctx.session.user.id } },
          ...input,
        },
      });
    }),
  updateNote: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().optional(),
        content: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.note.update({
        where: { id: input.id },
        data: {
          ...input,
        },
      });
    }),
  deleteNote: protectedProcedure
    .input(z.number())
    .mutation(({ ctx, input }) => {
      return ctx.db.note.delete({ where: { id: input } });
    }),
});
