import TopAdmin from "components/molecules/TopAdmin/TopAdmin";
import { NextPage } from "next";
import AdminNavigation from "../components/molecules/Navigation/AdminNavigation";
import styles from "./Layout.module.scss";
import avatar from "assets/admin_avatars/admin_avatar.svg";

interface AdminProps {
  children: React.ReactNode;
}

const AdminLayout: NextPage<AdminProps> = ({ children }) => {
  return (
    <div className="w-full flex">
      <AdminNavigation />

      <div className={`${styles.main} w-full `}>
        <div className={`w-11/12 mx-auto`}>
          <TopAdmin
            placeholder="Search candidates"
            avatar={avatar}
            avatarText="Ready to interview"
          />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;