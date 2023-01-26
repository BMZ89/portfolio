import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div className="flex justify-between gap-5">
      <Sidebar />

      <div className="container mx-auto px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
