import SingleVideo from "./SingleVideo";
import MultiVideo from "./MultiVideo";
import Video1 from "../public/videos/aditya-roy-kapur-shraddha-kapoor---sunn-raha-hai-na-tu-aashiqui-2-full-hd-song.mp4";
import Video2 from "../public/videos/Dasara-Telugu-kns6d-2023.mp4";
import Video3 from "../public/videos/Ravanasura-Telugu-knh1s-2023.mp4";
import { useRef, useState } from "react";
import Style from "./VideoPlayer.module.css";

const VideoPlayer = () => {
  let videoRef = useRef([]);
  let [video, setVideo] = useState({
    src: "",
    playVideo: true,
  });
  let { src, playVideo } = video;
  // let [playVideo, setPlayVideo] = useState(true);
  let videos = [Video1, Video2, Video3];
  let mouseEnter = (index) => {
    videoRef.current[index].play();
  };
  let mouseLeave = (index) => {
    videoRef.current[index].pause();
  };
  let updateVideo = (value) => {
    setVideo({ ...video, src: value });
  };
  let handleClick = () => {
    if (playVideo) {
      videoRef.current.play();
      // setPlayVideo(false);
      setVideo({ ...video, playVideo: false });
    } else {
      videoRef.current.pause();
      // setPlayVideo(true);
      setVideo({ ...video, playVideo: true });
    }
  };
  console.log(video);
  return (
    <section className={Style.videoPlayer}>
      <article>
        <SingleVideo
          video={src}
          handleClick={handleClick}
          videoRef={videoRef}
        />
      </article>
      <article>
        <MultiVideo
          videos={videos}
          videoRef={videoRef}
          mouseEnter={mouseEnter}
          mouseLeave={mouseLeave}
          setVideo={updateVideo}
        />
      </article>
    </section>
  );
};

export default VideoPlayer;
