import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import MainContent from './components/Dashboard/Main_content/MainContent.jsx';
import ChartsDashboard from './components/Dashboard/Charts/ChartsDashboard.jsx';
import Home from './components/landing/Home.jsx';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

function App() {
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
