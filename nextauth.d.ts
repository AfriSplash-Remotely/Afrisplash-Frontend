import { DefaultSession, DefaultUser } from "next-auth";
import { ACCOUNT_TYPE } from "./utils";


interface IUser extends DefaultUser {
    id: string;
    role: ACCOUNT_TYPE;
    accessToken: string;
    account_setup_completed:boolean
}

declare module "next-auth" {
    interface User extends IUser { }
    interface Session {
        user?: User;
    }
}