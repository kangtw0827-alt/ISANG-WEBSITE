import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import {
  createConstructionProject,
  deleteConstructionProject,
  listConstructionProjects,
  updateConstructionProject,
} from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";

export const projectInputSchema = z.object({
  year: z.number().int().min(2000).max(2100),
  name: z.string().trim().min(1).max(255),
  client: z.string().trim().min(1).max(255),
  location: z.string().trim().min(1).max(255),
  projectType: z.string().trim().min(1).max(100),
  grade: z.string().trim().min(1).max(50),
  area: z.number().int().positive().max(100_000_000),
  duration: z.string().trim().min(1).max(100),
  description: z.string().trim().min(1).max(5000),
  status: z.enum(["completed", "in_progress"]),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  projects: router({
    list: publicProcedure.query(async () => listConstructionProjects()),
    create: adminProcedure.input(projectInputSchema).mutation(async ({ input }) => {
      await createConstructionProject(input);
      return { success: true } as const;
    }),
    update: adminProcedure
      .input(z.object({ id: z.number().int().positive(), data: projectInputSchema }))
      .mutation(async ({ input }) => {
        await updateConstructionProject(input.id, input.data);
        return { success: true } as const;
      }),
    remove: adminProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ input }) => {
      await deleteConstructionProject(input.id);
      return { success: true } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;
