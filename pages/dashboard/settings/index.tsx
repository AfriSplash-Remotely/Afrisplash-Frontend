import { NextPage } from "next";
import ProfileSettings from "components/Settings"
import AdminLayout from "layouts/adminLayout";

const Settings: NextPage = () => {
  return (
    <AdminLayout>
      <h2 className="text-lg uppercase pl-12 pt-6">Settings </h2>

      <section className="pl-12 pt-6 pr-12">
  
          <ProfileSettings />
      </section>
      {/* </section> */}
    </AdminLayout>
  );
};

export default Settings;
