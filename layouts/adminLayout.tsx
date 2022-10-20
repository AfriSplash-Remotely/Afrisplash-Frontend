import TopAdmin from "components/molecules/TopAdmin/TopAdmin";
import { NextPage } from "next";
import Footer from "../components/molecules/Footer/Footer";
import AdminNavigation from "../components/molecules/Navigation/AdminNavigation";
import styles from "./Layout.module.scss";
import avatar from 'assets/admin_avatars/admin_avatar.svg'

interface AdminProps {
  children: React.ReactNode;
  searchPlaceholder: string;
}

const AdminLayout: NextPage<AdminProps> = ({ children, searchPlaceholder }) => {
  return (
    <div className="w-full flex">
      <AdminNavigation />

      <div className={`${styles.main} w-9/12 `}>
        <div className={`w-11/12 mx-auto`}>
          <TopAdmin placeholder={searchPlaceholder} avatar={avatar} avatarText="Ready to interview"/>
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
