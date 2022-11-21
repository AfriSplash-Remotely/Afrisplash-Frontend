import { NextPage } from "next";
import PropTypes, { InferProps } from "prop-types";
import Tabs from "components/Forum/Tabs";
import AdminNavigation from "components/molecules/Navigation/AdminNavigation";
import TopAdmin from "components/molecules/TopAdmin/TopAdmin";
import avatar from "assets/admin_avatars/admin_avatar.svg";
import styles from "./Layout.module.scss";


const tabs = [
    { title: 'Trending topics', routeLink: '/dashboard/forum', },
    { title: 'Splash rooms', routeLink: '/dashboard/forum/rooms', },
    { title: 'Mentors', routeLink: '/dashboard/forum/mentors', }

]

const ForumLayoutProps = {
    children: PropTypes.node.isRequired,
};

const ForumLayout: NextPage<InferProps<typeof ForumLayoutProps>> = ({
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
                    <Tabs tabItems={tabs} />

                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
};

export default ForumLayout;
