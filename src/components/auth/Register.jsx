import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

// registration with react query
const register = async ({ name, email, password }) => {
  const response = await api.post("/register", { name, email, password });
  return response.data;
};

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

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      navigate("/login");
      Swal.fire({
        icon: "success",
        title: "Registration successful!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Registration failed!",
        text: error.response.data.message,
      });
    },
  });

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      const payload = {
        name: state.name,
        email: state.email,
        password: state.password,
      };
      mutation.mutate(payload);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
      });
    }
  };
  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center h1">
              <b>P</b>ET
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign up to get services</p>
            <form onSubmit={handleSubmitClick}>
              <div className="input-group mb-3">
                <input
                  required
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
                  required
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
                  required
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
                  required
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
                      I agree to the <a href="/terms">terms</a>
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
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
