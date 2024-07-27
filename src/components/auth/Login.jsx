import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import api from "../../services/api";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
import { loginSuccess } from "../../middleware/slices/userSlice";

const login = async ({ email, password }) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      const decodedUser = jwtDecode(data.token);
      dispatch(loginSuccess(decodedUser));  // Save user info in Redux
      navigate("/dashboard");
      Swal.fire({
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Login failed!",
        text: error.response.data.message,
      });
    },
  });

  const handleSubmitClick = (e) => {
    e.preventDefault();
    mutation.mutate(state);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1">
              <b>P</b>ET
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleSubmitClick}>
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
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <p className="mb-1">
              <a href="#">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="/register" className="text-center">
                Register a new membership
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
