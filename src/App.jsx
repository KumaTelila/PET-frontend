import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./components/appHeader/appHeader.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar.jsx";
import Navbar from "./components/Dashboard/Navbar/Navbar.jsx";
import { SidebarItems } from "./components/Dashboard/Sidebar/common/sidebarData.jsx";
import TransactionTable from "./components/Dashboard/Transaction/TransactionTable.jsx";
import MainContent from "./components/Dashboard/Main_content/MainContent.jsx";
import LineChartOfExpense from "./components/Dashboard/Charts/LineChartOfExpense.jsx";
import ChartsDashboard from "./components/Dashboard/Charts/ChartsDashboard.jsx";

function App() {
  const user = {
    imageUrl: "dist/img/user2-160x160.jpg",
    name: "Alexander Pierce",
  };
  const brand = {
    imageUrl: "dist/img/AdminLTELogo.png",
    name: "PET",
  };
  const isLoggedIn = true;

  return (
    <Router>
      <div className="wrapper">
        {isLoggedIn && <Navbar />}
        {isLoggedIn && <Sidebar items={SidebarItems} user={user} brand={brand} />}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/expenses" element={<MainContent />} />
          <Route path="/dashboard" element={<ChartsDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
