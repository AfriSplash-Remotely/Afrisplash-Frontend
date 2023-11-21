import { DefaultSession, DefaultUser } from "next-auth";
import { ACCOUNT_TYPE } from "@/lib/constant";


interface IUser extends DefaultUser {
    id: string;
    role: ACCOUNT_TYPE;
    accessToken: string;
}

declare module "next-auth" {
    interface User extends IUser { }
    interface Session {
        user?: User;
    }
}