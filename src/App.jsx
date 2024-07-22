import logo from './logo.svg';
import './App.css';
import AppHeader from './components/appHeader/appHeader.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import Sidebar from './components/Dashboard/Sidebar/Sidebar.jsx';
import Navbar from './components/Dashboard/Navbar/Navbar.jsx';
import { SidebarItems } from './components/Dashboard/Sidebar/common/sidebarData.jsx';

function App() {

  const user = {
    imageUrl: 'dist/img/user2-160x160.jpg',
    name: 'Alexander Pierce'
  };
const brand = {
  imageUrl: 'dist/img/AdminLTELogo.png',
  name: 'PET'
}
  return (
    <div className="wrapper">
      <Register/>
     <Login/>
     <Navbar/>
     <Sidebar items={SidebarItems} user={user} brand = {brand}/>
     {/* <AppHeader /> */}
    </div>
  );
}

export default App;
