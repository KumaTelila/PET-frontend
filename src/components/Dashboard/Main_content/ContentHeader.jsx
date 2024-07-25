import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarItems } from "../Sidebar/common/sidebarData";

const ContentHeader = ({ title, breadcrumb }) => {
  const user = {
    imageUrl: "dist/img/user2-160x160.jpg",
    name: "Alexander Pierce",
  };
  const brand = {
    imageUrl: "dist/img/AdminLTELogo.png",
    name: "PET",
  };
  return (
    <>
    <Navbar/>
    <Sidebar
     items={SidebarItems} user={user} brand={brand}
    />
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">{title}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">{breadcrumb}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContentHeader;
