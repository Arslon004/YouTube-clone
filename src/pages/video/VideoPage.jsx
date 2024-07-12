
import PlayVideo from "../../components/playvideo/PlayVideo";
import Recomended from "../../components/recomended/Recomended";
import "./VideoPage.css";

const VideoPage = () => {
  return (
    <div className="play-container">
      <PlayVideo/>
      <Recomended/>
    </div>
  )
}

export default VideoPage