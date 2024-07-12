

import like from "../../assets/images/like.svg";
import dislike from "../../assets/images/dislike.svg";
import share from "../../assets/images/share.svg";
import download from "../../assets/images/download.svg";
import save from "../../assets/images/save.svg";
import fcb from "../../assets/images/fcb.svg";
import profile_icon from "../../assets/images/profile_icon.svg";

import "./PlayVideo.css";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src="" controls autoPlay muted></video>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <div className="play-video-info">
        <p>125625 views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="" />126</span>
          <span><img src={dislike} alt="" />82</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={download} alt="" />Download</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={fcb} alt="" />
        <div>
          <p>FC Barcelona</p>
          <span>1M subscribers</span>
        </div>
        <button>SUBSCRIBE</button>
      </div>
      <div className="vid-description">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, dolor.</p>
        <hr />
        <h4>130 comments</h4>
        <div className="comment">
          <img src={profile_icon} alt="" />

          <div>
            <h3>Arslon <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus nihil impedit fugit similique consequuntur inventore unde repellat deserunt doloremque.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={profile_icon} alt="" />

          <div>
            <h3>Arslon <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus nihil impedit fugit similique consequuntur inventore unde repellat deserunt doloremque.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>


        <div className="comment">
          <img src={profile_icon} alt="" />

          <div>
            <h3>Arslon <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus nihil impedit fugit similique consequuntur inventore unde repellat deserunt doloremque.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>


        <div className="comment">
          <img src={profile_icon} alt="" />

          <div>
            <h3>Arslon <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus nihil impedit fugit similique consequuntur inventore unde repellat deserunt doloremque.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default PlayVideo