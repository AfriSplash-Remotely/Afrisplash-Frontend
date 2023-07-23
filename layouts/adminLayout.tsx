import { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import PropTypes, { InferProps } from "prop-types";
import Cookies from "js-cookie";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [navSwitch, setNavSwitch] = useState<boolean>(false);

  useEffect(() => {
    const storedState = Cookies.get("sidebarToggleState");

    if (!storedState) {
      // Create the cookie if it doesn't exist and set the navSwitch state to true
      Cookies.set("sidebarToggleState", "closed");
      setNavSwitch(true);
    } else {
      // Set the navSwitch state based on the stored state
      setNavSwitch(storedState === "open" ? false : true);
    }
  }, []);

  const handleNavSwitch = (): void => {
    setNavSwitch(!navSwitch);
    Cookies.set("sidebarToggleState", !navSwitch === true ? "closed" : "open");
  };

  const handleShowSidebar = (): void => {
    setIsOpen(!isOpen);
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
            isOpen={isOpen}
            focused={focused}
            navSwitch={navSwitch}
            setIsOpen={setIsOpen}
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
            handleShowSidebar={handleShowSidebar}
          />
          <main>
            <div className="py-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
