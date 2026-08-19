import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

/** 공개 시공사례. 생성·수정·삭제는 관리자 전용 API에서만 수행한다. */
export const constructionProjects = mysqlTable("construction_projects", {
  id: int("id").autoincrement().primaryKey(),
  year: int("year").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  client: varchar("client", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  projectType: varchar("projectType", { length: 100 }).notNull(),
  grade: varchar("grade", { length: 50 }).notNull(),
  area: int("area").notNull(),
  duration: varchar("duration", { length: 100 }).notNull(),
  description: text("description").notNull(),
  status: mysqlEnum("status", ["completed", "in_progress"]).default("completed").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type ConstructionProject = typeof constructionProjects.$inferSelect;
export type InsertConstructionProject = typeof constructionProjects.$inferInsert;
