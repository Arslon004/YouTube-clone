
import "./Sidebar.css";
import home_sb from "../../assets/images/home_sb.svg";
import gaming from "../../assets/images/gaming.png";
import auto from "../../assets/images/auto.png";
import sports from "../../assets/images/sports.png";
import library_sb from "../../assets/images/library_sb.svg";
import history_sb from "../../assets/images/history_sb.svg";
import videos_sb from "../../assets/images/videos_sb.svg";
import watch_sb from "../../assets/images/watch_sb.svg";
import pop_sb from "../../assets/images/pop_sb.svg";
import fcb from "../../assets/images/fcb.svg";
import ted from "../../assets/images/ted.svg";
import fifa from "../../assets/images/fifa.svg";
import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const {sidebar,category,setCategory}=useContext(SidebarContext)
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"} `}>
      <div className="sortcut-links">
        <div className={`side-link ${category ===0 ? 'active' :""}`} onClick={()=>setCategory(0)}>
          <img src={home_sb} alt="" /> <p>Home</p>
        </div>

        <div className={`side-link ${category ===20 ? 'active' :""}`} onClick={()=>setCategory(20)}>
          <img src={gaming} alt="" /> <p>Gaming</p>
        </div>

        <div className={`side-link ${category ===2 ? 'active' :""}`} onClick={()=>setCategory(2)}>
          <img src={auto} alt="" /> <p>Automobiles</p>
        </div>

        <div className={`side-link ${category ===17 ? 'active' :""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="" /> <p>Sports</p>
        </div>

        <hr />

        <div className={`side-link ${category ===24 ? 'active' :""}`} onClick={()=>setCategory(24)}>
          <img src={library_sb} alt="" /> <p>Library</p>
        </div>

        <div className={`side-link ${category ===28 ? 'active' :""}`} onClick={()=>setCategory(28)}>
          <img src={history_sb} alt="" /> <p>History</p>
        </div>

        <div className={`side-link ${category ===10 ? 'active' :""}`} onClick={()=>setCategory(10)}>
          <img src={videos_sb} alt="" /> <p>Your videos</p>
        </div>

        <div className={`side-link ${category ===22 ? 'active' :""}`} onClick={()=>setCategory(22)}>
          <img src={watch_sb} alt="" /> <p>Watch later</p>
        </div>

        <div className={`side-link ${category ===25 ? 'active' :""}`} onClick={()=>setCategory(25)}>
          <img src={pop_sb} alt="" /> <p>Pop</p>
        </div>
      </div>

      <div className="subscribed-list">
        <h3>SUBSCRIPTIONS</h3>
        <div className={`side-link`} onClick={()=>setCategory(0)}>
          <img src={fcb} alt="" /> <p>FC Barcelona</p>
        </div>

        <div className={`side-link`} onClick={()=>setCategory(0)}>
          <img src={ted} alt="" /> <p>TED</p>
        </div>

        <div className={`side-link`} onClick={()=>setCategory(0)}>
          <img src={fifa} alt="" /> <p>FIFA</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar