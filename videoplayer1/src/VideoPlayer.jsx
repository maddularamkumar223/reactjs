import SingleVideo from "./SingleVideo";
import MultiVideo from "./MultiVideo";
import Video1 from "../public/videos/aditya-roy-kapur-shraddha-kapoor---sunn-raha-hai-na-tu-aashiqui-2-full-hd-song.mp4";
import Video2 from "../public/videos/Dasara-Telugu-kns6d-2023.mp4";
import Video3 from "../public/videos/Ravanasura-Telugu-knh1s-2023.mp4";
import { useRef } from "react";

const VideoPlayer = () => {
  let videoRef = useRef([]);
  let videos = [Video1, Video2, Video3];

  let mouseEnter = (index) => {
    videoRef.current[index].play();
  };
  let mouseLeave = (index) => {
    videoRef.current[index].pause();
  };
  return (
    <section>
      <article>
        <SingleVideo />
      </article>
      <article>
        <MultiVideo
          videos={videos}
          videoRef={videoRef}
          mouseEnter={mouseEnter}
          mouseLeave={mouseLeave}
        />
      </article>
    </section>
  );
};

export default VideoPlayer;
