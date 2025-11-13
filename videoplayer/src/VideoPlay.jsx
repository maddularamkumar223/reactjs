import SingleVideo from "./SingleVideo";
import DisplayVideos from "./DisplayVideos";
import Style from "./VideoPlay.module.css";
import Video1 from "../public/videos/Dasara-Telugu-kns6d-2023.mp4";
import Video2 from "../public/videos/Dhamaka-Telugu-b3fwv-2022 (2).mp4";
import Video3 from "../public/videos/Keshava-2017.mp4";
import Video4 from "../public/videos/meesaya-murukku--music-video--hiphop-tamizha---sundar-c--avni---enna-nadanthalum.mp4";
import { useRef, useState } from "react";

const VideoPlay = () => {
  let [video, setVideo] = useState({
    singleVideoData: "",
    toggle: false,
  });
  let { singleVideoData, toggle } = video;
  let videoList = [Video1, Video2, Video3, Video4];
  let videoRef = useRef([]);

  let mouseEnter = (index) => {
    let videoData = videoRef.current[index];
    videoData.play();
  };
  let mouseLeave = (index) => {
    let videoData = videoRef.current[index];
    videoData.pause();
  };

  let singleVideo = (data) => {
    setVideo({ ...video, singleVideoData: data });
  };
  let handleClick = () => {
    setVideo({ ...video, toggle: !toggle });
    toggle ? videoRef.current.pause() : videoRef.current.play();
  };

  return (
    <section className={Style.container}>
      <article className={Style.singleVideo}>
        <SingleVideo
          video={singleVideoData}
          handleClick={handleClick}
          videoRef={videoRef}
        />
      </article>
      <article className={Style.videos}>
        <DisplayVideos
          videoList={videoList}
          videoRef={videoRef}
          mouseEnter={mouseEnter}
          mouseLeave={mouseLeave}
          singleVideo={singleVideo}
        />
      </article>
    </section>
  );
};

export default VideoPlay;
