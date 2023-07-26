import { NextPage } from "next";
import PropTypes, { InferProps } from "prop-types";
import SettingsBtn from "@/components/DashboardSettingsComponents/settingsBtn";
import AdminLayout from "./adminLayout";

const btns = [
  { title: "Account Settings", routeLink: "/dashboard/settings" },
  { title: "Notifications", routeLink: "/dashboard/settings/notifications" },
  { title: "Security", routeLink: "/dashboard/settings/security" },
  { title: "Language", routeLink: "/dashboard/settings/language" },
];
const SettingLayoutProps = {
  children: PropTypes.node.isRequired,
};

const SettingsLayout: NextPage<InferProps<typeof SettingLayoutProps>> = ({
  children,
}) => {
  return (
    <AdminLayout>
      <div className={`px-8 xx:px-12`}>
        <div className={`flex items-center justify-between`}>
          <h4 className={"font-normal mb-4 md:mb-6"}>SETTINGS</h4>
        </div>

        <div className={`flex flex-wrap w-full items-start gap-12`}>
          <div className={`flex flex-col items-start`}>
            <SettingsBtn btnItem={btns} />
          </div>
          <div className="grow">{children}</div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SettingsLayout;
