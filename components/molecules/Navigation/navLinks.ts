import briefcase from "assets/admin_icons/briefcase.svg";
import directsend from "assets/admin_icons/direct-send.svg";
import messages_2 from "assets/admin_icons/messages-2.svg";
import messages from "assets/admin_icons/messages.svg";
import setting_3 from "assets/admin_icons/setting-3.svg";
import user from "assets/admin_icons/user.svg";

const candidateNavLinks = [
  {
    title: "Profile",
    icon: user,
    route: "/dashboard/candidate",
  },
  {
    title: "Jobs",
    icon: briefcase,
    route: "/dashboard/candidate/jobs",
  },
  {
    title: "Applied",
    icon: directsend,
    route: "/dashboard/candidate/applied",
  },
  {
    title: "Messages",
    icon: messages,
    route: "/dashboard/candidate/messages",
  },
  {
    title: "Forum",
    icon: messages_2,
    route: "/dashboard/candidate/forum",
  },
  {
    title: "Settings",
    icon: setting_3,
    route: "/dashboard/candidate/settings",
  },
];
const recruiterNavLinks = [
  { title: "Profile", icon: user, route: "/dashboard/recruiter" },
  { title: "Jobs", icon: briefcase, route: "/dashboard/recruiter/jobs" },
  {
    title: "Applicants",
    icon: directsend,
    route: "/dashboard/recruiter/applicants",
  },
  { title: "Messages", icon: messages, route: "/dashboard/recruiter/messages" },
  {
    title: "Forum",
    icon: messages_2,
    route: "/dashboard/recruiter/forum",
  },
  {
    title: "Settings",
    icon: setting_3,
    route: "/dashboard/recruiter/settings",
  },
];

export { candidateNavLinks, recruiterNavLinks };
