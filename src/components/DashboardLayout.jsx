import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-[#eff1f7] via-[#f9f3df] to-[#ecdcbf]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        {location.pathname === "/" && <Navbar />}
        {location.pathname === "/page1" && <Navbar />}
        {location.pathname === "/page2" && <Navbar />}
        <main className="flex-1 p-4 sm:p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;