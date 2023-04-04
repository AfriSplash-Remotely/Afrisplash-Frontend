import AdminLayout from "./adminLayout";
import { NextPage } from 'next';
import PropTypes, { InferProps } from 'prop-types';
import SettingsBtn from "@/components/DashboardSettingsComponents/settingsBtn";


const btns = [
    { title: "Account Settings", routeLink: "/dashboard/settings" },
    { title: "Notifications", routeLink: " /dashboard/settings/notifications" },
    { title: "Security", routeLink: "/dashboard/settings/security" },
    { title: "Language", routeLink: " /dashboard/settings/language" },

];
const SettingLayoutProps = {
    children: PropTypes.node.isRequired,
}

// eslint-disable-next-line react/prop-types
const SettingsLayout: NextPage<InferProps<typeof SettingLayoutProps>> = ({ children }) => {
    return (
        <AdminLayout>
            <div className={`px-8 xx:px-12`}>
                <div className={`flex items-center justify-between`}>
                    <h4 className={`mt-[4.5rem] font-[400] mb-[2.375rem]`}>SETTINGS</h4>
                </div>

                <div className={`flex flex-row items-start justify-between`}>
                    <div className={`flex flex-col items-start`}>
                        <SettingsBtn btnItem={btns} />
                    </div>
                    <div>{children}</div>
                </div>

            </div>
        </AdminLayout>
    )
}


export default SettingsLayout