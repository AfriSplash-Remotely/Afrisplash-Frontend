import briefcase from "assets/admin_icons/briefcase.svg";
import directsend from "assets/admin_icons/direct-send.svg";
import messages_2 from "assets/admin_icons/messages-2.svg";
import messages from "assets/admin_icons/messages.svg";
import setting_3 from "assets/admin_icons/setting-3.svg";
import user from "assets/admin_icons/user.svg";

const navLinks = [
  {
    title: "Profile",
    icon: user,
    route: "/dashboard",
  },
  {
    title: "Jobs",
    icon: briefcase,
    route: "/dashboard/jobs",
  },
  {
    title: "Applicants",
    icon: directsend,
    route: "/dashboard/applicants",
  },
  {
    title: "Messages",
    icon: messages,
    route: "/dashboard/messages",
  },
  {
    title: "Forum",
    icon: messages_2,
    route: "/dashboard/forum",
  },
  {
    title: "settings",
    icon: setting_3,
    route: "/dashboard/settings",
  },
];

export default navLinks;
