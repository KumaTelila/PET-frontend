import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    Swal.fire({
      icon: "success",
      title: "Logout successful!",
      showConfirmButton: false,
      timer: 1500,
    })
    navigate("/login"); 
  }
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="/dashboard" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/dashboard" className="nav-link">Home</a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <button type="submit" onClick={Logout} className="btn btn-primary btn-block">
            <i className="fas fa-sign-out-alt pr-2"></i>Log out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
