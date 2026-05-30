import React, { useState } from "react";
import Navbar from "../Components/NavbarComponent/NavbarComponent";
import Sidebar from "../Components/SidebarComponent/SidebarComponent";
import "../Layout/Layout.css";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} />

      <div className={`main ${collapsed ? "expanded" : ""}`}>
        <Navbar toggleSidebar={() => setCollapsed(!collapsed)} />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;