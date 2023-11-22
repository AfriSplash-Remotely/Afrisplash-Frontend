import briefcase from "assets/admin_icons/briefcase.svg";
import directsend from "assets/admin_icons/direct-send.svg";
import messages_2 from "assets/admin_icons/messages-2.svg";
import messages from "assets/admin_icons/messages.svg";
import setting_3 from "assets/admin_icons/setting-3.svg";
import user from "assets/admin_icons/user.svg";




export  const navLinks = [
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
    title: "Applied",
    icon: directsend,
    route: "/dashboard/applied",
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
    title: "Settings",
    icon: setting_3,
    route: "/dashboard/settings",
  },
];


