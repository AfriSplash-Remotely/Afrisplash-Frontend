import briefcase from "assets/admin_icons/briefcase.svg";
import directsend from "assets/admin_icons/direct-send.svg";
import messages from "assets/admin_icons/messages.svg";
import messages_2 from "assets/admin_icons/messages-2.svg";
import setting_3 from "assets/admin_icons/setting-3.svg";
import user from "assets/admin_icons/user.svg";

const navLinks = [
  {
    title: "Profile",
    icon: user,
    route: "/recruiter",
  },
  {
    title: "Jobs",
    icon: briefcase,
    route: "/recruiter/jobs",
  },
  {
    title: "Applicants",
    icon: directsend,
    route: "/recruiter/applicants",
  },
  {
    title: "Messages",
    icon: messages,
    route: "/recruiter/messages",
  },
  {
    title: "Forum",
    icon: messages_2,
    route: "/recruiter/forum",
  },
  {
    title: "settings",
    icon: setting_3,
    route: "/recruiter/settings",
  },
];

export default navLinks;
