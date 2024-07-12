import menu_icon from "../../assets/images/menu_icon.svg";
import logo from "../../assets/images/logo.svg";
import search_icon from "../../assets/images/search_icon.svg";
import upload_icon from "../../assets/images/upload_icon.svg";
import notification_icon from "../../assets/images/notification_icon.svg";
import profile_icon from "../../assets/images/profile_icon.svg";


import "./Navbar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
const Navbar = () => {
  const {setSidebar}=useContext(SidebarContext)
  return (
    <nav className="flex-div">
      <div className="flex-div nav-left">
        <img className="menu-icon" onClick={()=>setSidebar((prev)=>prev===false ? true : false)} src={menu_icon} alt="" />
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img className="user-icon" src={profile_icon} alt="" />
      </div>
    </nav>
  )
}

export default Navbar