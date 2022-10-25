import { NextPage } from "next";
import PropTypes, { InferProps } from "prop-types";
import AdminNavigation from "components/molecules/Navigation/AdminNavigation";
import TopAdmin from "components/molecules/TopAdmin/TopAdmin";
import avatar from "assets/admin_avatars/admin_avatar.svg";
import styles from "./Layout.module.scss";

const AdminLayoutProps = {
  children: PropTypes.node.isRequired,
};

const AdminLayout: NextPage<InferProps<typeof AdminLayoutProps>> = ({
  children,
}) => {
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
