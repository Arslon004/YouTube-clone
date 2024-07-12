import { Link } from "react-router-dom";
import "./Feed.css";

const Feed = () => {
  return (

    <div className="feed">
      <Link to={`video/20/4521`} className="card">
        <img src="" alt="Example Image" />
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, in</h2>
        <h3>Arslon Bozorov</h3>
        <p>15k views &bull; 2 days ago</p>
      </Link>

      <div className="card">
        <img src="" alt="Example Image" />
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, in</h2>
        <h3>Arslon Bozorov</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className="card">
        <img src="" alt="Example Image" />
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, in</h2>
        <h3>Arslon Bozorov</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className="card">
        <img src="" alt="Example Image" />
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, in</h2>
        <h3>Arslon Bozorov</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className="card">
        <img src="" alt="Example Image" />
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, in</h2>
        <h3>Arslon Bozorov</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className="card">
        <img src="" alt="Example Image" />
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, in</h2>
        <h3>Arslon Bozorov</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
    </div>
  );
}

export default Feed;
