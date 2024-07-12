import { Fragment, useContext } from "react";
import "./HomePage.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { SidebarContext } from "../../context/SidebarContext";
import Feed from "../../components/feed/Feed";

const HomePage = () => {
  const { sidebar } = useContext(SidebarContext);
  return (
    <Fragment>
      <Sidebar />
      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        <Feed />
      </div>
    </Fragment>
  )
}

export default HomePage;
