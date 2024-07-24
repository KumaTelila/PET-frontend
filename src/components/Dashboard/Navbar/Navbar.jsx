import React from 'react';

const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="index3.html" className="nav-link">Home</a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <button type="submit" className="btn btn-primary btn-block">
            <i className="fas fa-sign-out-alt pr-2"></i>Log out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
