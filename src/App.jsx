import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import Sidebar from './components/Dashboard/Sidebar/Sidebar.jsx';
import { SidebarItems } from './components/Dashboard/Sidebar/common/sidebarData.jsx';
import MainContent from './components/Dashboard/Main_content/MainContent.jsx';
import ChartsDashboard from './components/Dashboard/Charts/ChartsDashboard.jsx';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Home from './components/landing/Home.jsx';

function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('token'); // Check for token
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const user = {
    imageUrl: "dist/img/user2-160x160.jpg",
    name: "Alexander Pierce",
  };
  const brand = {
    imageUrl: "dist/img/AdminLTELogo.png",
    name: "PET",
  };
  const MySwal = withReactContent(Swal);

  // ... (your sweetalert code if needed)

  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/expenses" element={<ProtectedRoute><MainContent /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><ChartsDashboard /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
