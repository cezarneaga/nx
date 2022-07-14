import { createCookieSessionStorage, redirect } from "@remix-run/cloudflare";
import invariant from "tiny-invariant";
import type { User } from "~/models/user.server";
import { getUserById } from "~/models/user.server";
invariant(SESSION_SECRET, "SESSION_SECRET must be set");

export const sessionStorage = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 0,
      path: "/",
      sameSite: "lax",
      secrets: [SESSION_SECRET],
      secure: NODE_ENV === "production",
    },
  });

const USER_SESSION_KEY = "userId";

export async function getSession(request: Request) {
    const cookie = request.headers.get("Cookie");
    return sessionStorage.getSession(cookie);
}

export async function getUserId(request: Request): Promise<string | undefined> {
    const session = await getSession(request);
    const userId = session.get(USER_SESSION_KEY);
    return userId;
  }

export async function getUser(request: Request): Promise<null | User> {
    const userId = await getUserId(request);
    if (userId === undefined) return null;
    return getUserById(userId);
  }