import React, { useRef, useState } from "react";
import ogImage from "../public/rs-5-lakh-paid-for-pawan-kalyans-og-movie-ticket-who-bought-it-check-viral-video.avif";
import song from "../public/theycallhimog--pawan-kalyan--emraan-hashmi--sujeeth--thaman-s--dvv-danayya.mp3";
import video from "../public/firestorm-lyric-video--pawan-kalyan--sujeeth--thaman-s--dvv-danayya---they-call-him-og.mp4";

const Audio = () => {
  let [songState, setSongState] = useState(true);
  let audioRef = useRef(song);
  let videoRef = useRef(video);
  let img = {
    height: "200px",
    width: "200px",
  };
  let handleClick = () => {
    if (songState) {
      //   audioRef.current.play();
      videoRef.current.play();
      setSongState(false);
    } else {
      videoRef.current.pause();
      //   audioRef.current.pause();
      setSongState(true);
    }
  };
  return (
    <div>
      <img
        src={ogImage}
        alt=""
        ref={audioRef}
        style={img}
        onClick={handleClick}
      />
      {/* <audio src={song} ref={audioRef}></audio> */}
      <video
        src={video}
        ref={videoRef}
        onClick={handleClick}
        onMouseEnter={handleClick}
        muted
      ></video>
    </div>
  );
};

export default Audio;
