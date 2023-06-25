/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import PropTypes, { InferProps } from "prop-types";
import AdminNavigation from "components/molecules/Navigation/AdminNavigation";
import MobileSidebar from "@/components/molecules/Navigation/MobileSidebar";
import TopAdmin from "components/molecules/TopAdmin/TopAdmin";
import avatar from "assets/admin_avatars/admin_avatar.svg";
import styles from "./Layout.module.scss";

const AdminLayoutProps = {
  children: PropTypes.node.isRequired,
};

const AdminLayout: NextPage<InferProps<typeof AdminLayoutProps>> = ({
  children,
}) => {
  const router = useRouter();
  const [navSwitch, setNavSwitch] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    if (window.innerWidth < 840) {
      setNavSwitch(true);
    }
  }, [navSwitch, setNavSwitch]);

  const handleNavSwitch: () => void = (): void => {
    setNavSwitch(!navSwitch);
  };

  return (
    <div className="w-full flex">
      <AdminNavigation
        focused={focused}
        navSwitch={navSwitch}
        setFocused={setFocused}
        handleNavSwitch={handleNavSwitch}
      />
      <div className={`${styles.main} w-full `}>
        <div className="w-11/12 mx-auto">
          <MobileSidebar
            focused={focused}
            navSwitch={navSwitch}
            setFocused={setFocused}
          />
          <TopAdmin
            placeholder={`${
              router.pathname == "/dashboard/forum"
                ? "Search"
                : "Search candidates"
            }`}
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
