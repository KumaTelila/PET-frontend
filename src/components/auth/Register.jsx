import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  
  var message =  null
  var newClass = "btn btn-primary btn-block"
  const handleSubmitClick = async (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      const payload = {
        name: state.name,
        email: state.email,
        password: state.password,
      };

      try {
        const response = await api.post("/register", payload);
        if (response.status === 201) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "Registration successful. Redirecting to Dashboard page...",
          }));
          message = "Registration successful. Redirecting to Dashboard page...";
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Registration error:", error.response.data);
        alert("Registration failed. Please try again.");
        message = error.response.data.message;
      }
    } else {
      alert("Passwords do not match.");
      message = "Passwords do not match.";
    }
  };
  const HandleAlert = () => {
    if (message) {
      if (message === "Registration successful. Redirecting to Dashboard page...") {
        newClass = "btn-success swalDefaultSuccess"
    }else{
      newClass = "btn-danger swalDefaultError"
    }
    }
  };
  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1">
              <b>P</b>ET
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign up to get services</p>
            <form onSubmit={handleSubmitClick}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  id="name"
                  value={state.name}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  value={state.email}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  value={state.password}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype password"
                  id="confirmPassword"
                  value={state.confirmPassword}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      value="agree"
                    />
                    <label htmlFor="agreeTerms">
                      I agree to the <a href="#">terms</a>
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" onClick={HandleAlert} className={newClass}>
                    Sign up
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <a href="/login" className="text-center">
              I already have a membership
            </a>
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};

export default Register;
