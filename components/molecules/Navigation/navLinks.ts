import { ACCOUNT_TYPE } from "@/utils";
import briefcase from "assets/admin_icons/briefcase.svg";
import directsend from "assets/admin_icons/direct-send.svg";
import messages_2 from "assets/admin_icons/messages-2.svg";
import messages from "assets/admin_icons/messages.svg";
import setting_3 from "assets/admin_icons/setting-3.svg";
import user from "assets/admin_icons/user.svg";

export interface IsideBarLinks {
  title: string;
  route: string;
  icon: string
  role: ACCOUNT_TYPE[]
}

export const navLinks: IsideBarLinks[] = [
  {
    title: "Profile",
    icon: user,
    route: "/dashboard",
    role: [ACCOUNT_TYPE.recruiter, ACCOUNT_TYPE.candidate]
  },
  {
    title: "Jobs",
    icon: briefcase,
    route: "/dashboard/jobs",
    role: [ACCOUNT_TYPE.candidate]

  },
  // for recruiter, Applied should be Applicants
  {
    title: "Applied",
    icon: directsend,
    route: "/dashboard/applied",
    role: [ACCOUNT_TYPE.candidate]

  },
  {
    title: "Messages",
    icon: messages,
    route: "/dashboard/messages",
    role: [ACCOUNT_TYPE.recruiter, ACCOUNT_TYPE.candidate]

  },
  {
    title: "Forum",
    icon: messages_2,
    route: "/dashboard/forum",
    role: [ACCOUNT_TYPE.recruiter, ACCOUNT_TYPE.candidate]

  },
  {
    title: "Settings",
    icon: setting_3,
    route: "/dashboard/settings",
    role: [ACCOUNT_TYPE.recruiter, ACCOUNT_TYPE.candidate]

  },
];


