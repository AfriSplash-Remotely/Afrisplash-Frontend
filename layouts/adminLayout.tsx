import { NextPage } from "next";
import Footer from "../components/molecules/Footer/Footer";
import AdminNavigation from "../components/molecules/Navigation/AdminNavigation";

interface AdminProps {
  children: React.ReactNode;
}

const AdminLayout: NextPage<AdminProps> = ({ children }) => {
  return (
    <div className="w-full">
      <aside>
        <AdminNavigation />
      </aside>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
