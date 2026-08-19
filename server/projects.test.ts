import { describe, expect, it } from "vitest";
import { appRouter, projectInputSchema } from "./routers";
import type { TrpcContext } from "./_core/context";

const validProject = {
  year: 2026,
  name: "테스트 클린룸 구축",
  client: "테스트 발주처",
  location: "서울특별시",
  projectType: "제약 GMP",
  grade: "ISO Class 7",
  area: 320,
  duration: "4개월",
  description: "중앙 저장소 입력값 검증을 위한 테스트 데이터입니다.",
  status: "completed" as const,
};

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {} as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("construction project management", () => {
  it("accepts a valid construction project payload", () => {
    expect(projectInputSchema.parse(validProject)).toMatchObject(validProject);
  });

  it("rejects a non-positive construction area", () => {
    expect(() => projectInputSchema.parse({ ...validProject, area: 0 })).toThrow();
  });

  it("blocks unauthenticated users from creating a project", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(caller.projects.create(validProject)).rejects.toMatchObject({ code: "FORBIDDEN" });
  });
});
