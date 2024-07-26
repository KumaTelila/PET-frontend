import React, { useEffect } from "react";
import "./css/styles.css"; // Adjust the path as needed

const Home = () => {
  useEffect(() => {
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );

    const handleNavItemClick = () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    };

    responsiveNavItems.forEach((responsiveNavItem) => {
      responsiveNavItem.addEventListener("click", handleNavItemClick);
    });

    return () => {
      responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.removeEventListener("click", handleNavItemClick);
      });
    };
  }, []);

  return (
    <div id="page-top">
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        id="mainNav"
      >
        <div className="container px-5">
          <a className="navbar-brand fw-bold" href="#page-top">
            Expense Tracker App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="bi-list"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="/login">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="/register">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead header */}
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              {/* Masthead text and app badges */}
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <h1 className="display-1 lh-1 mb-3">
                  Manage your expenses effortlessly.
                </h1>
                <p className="lead fw-normal text-muted mb-5">
                  Track your expenses and budget your finances with ease using
                  our Expense Tracker App.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Masthead device mockup feature */}
              <div className="masthead-device-mockup">
                <svg
                  className="circle"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="circleGradient"
                      gradientTransform="rotate(45)"
                    >
                      <stop className="gradient-start-color" offset="0%"></stop>
                      <stop className="gradient-end-color" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg
                  className="shape-1 d-none d-sm-block"
                  viewBox="0 0 240.83 240.83"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-32.54"
                    y="78.39"
                    width="305.92"
                    height="84.05"
                    rx="42.03"
                    transform="translate(120.42 -49.88) rotate(45)"
                  ></rect>
                  <rect
                    x="-32.54"
                    y="78.39"
                    width="305.92"
                    height="84.05"
                    rx="42.03"
                    transform="translate(-49.88 120.42) rotate(-45)"
                  ></rect>
                </svg>
                <svg
                  className="shape-2 d-none d-sm-block"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <div className="device-wrapper">
                  {/* <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                    <div className="screen bg-black">
                      <video muted autoPlay loop style={{ maxWidth: '100%', height: '100%' }}>
                        <source src="./finance.jpg" type="video/mp4" />
                      </video>
                    </div>
                  </div> */}
                  <div
                    className="device"
                    data-device="iPhoneX"
                    data-orientation="portrait"
                    data-color="black"
                  >
                    <div className="screen bg-black">
                      <img
                        src="./finance.jpg"
                        alt="Finance"
                        style={{ maxWidth: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Quote/testimonial aside */}
      <aside className="text-center bg-gradient-primary-to-secondary">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
              <div className="h2 fs-1 text-white mb-4">
                "An intuitive solution to managing your finances effectively!"
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* Footer */}
      <footer className="bg-black text-center py-5">
        <div className="container px-5">
          <div className="text-white-50 small">
            <div className="mb-2">
              &copy; Expense Tracker App 2024. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
