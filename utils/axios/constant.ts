import Cookies from "js-cookie";
import { Session } from "next-auth";

export const LOGGED_IN_USER = "afri_user";
export const ACCESSTOKEN = "accessToken"

export interface User {
  user: {
    email: string;
    id: string;
    accessToken: string;
    userType: string;
    account_setup_completed: boolean;
  };
  expires: string;
}

export function saveUserSession(session: Session | null, days: number): void {
  const item = {
    user: session?.user,
    expires: session?.expires,
  };

  const expiration = days * 86400 * 1000; // 1day

  Cookies.set(LOGGED_IN_USER, JSON.stringify(item), {
    expires: days ?? expiration,
  });
}

export function getUserSession(): User | null {
  const userCookie = Cookies.get(LOGGED_IN_USER);
  if (userCookie) {
    return JSON.parse(userCookie) as User;
  }
  return null;
}

export function getToken(token: string): string | null {
  return Cookies.get(token) || null;
}

export function removeToken(token: string): void {
  Cookies.remove(token);
}