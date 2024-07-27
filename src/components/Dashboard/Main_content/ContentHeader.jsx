import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarItems } from "../Sidebar/common/sidebarData";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import fetchUser from "../../Functions/FetchUser";

const ContentHeader = ({ title, breadcrumb }) => {
  // Fetch user information from the server to ensure the data is up-to-date
  const { data: user, error, isLoading } = useQuery({
    queryKey: ['user'], 
    queryFn: fetchUser
  });

  useEffect(() => {
    if (isLoading) {
      Swal.fire({
        title: "Loading...",
        text: "Fetching user information...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      Swal.close();
    }
  }, [isLoading]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error fetching user information",
        text: error.response ? error.response.data.message : " error",
      });
    }
  }, [error]);

  const brand = {
    imageUrl: "dist/img/AdminLTELogo.png",
    name: "PET",
  };

  if (isLoading || error || !user) {
    return null; // You can return a loader or an error message here if desired
  }

  return (
    <>
      <Navbar />
      <Sidebar items={SidebarItems} user={user} brand={brand} />
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
