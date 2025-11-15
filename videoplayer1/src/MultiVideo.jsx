import React from "react";

const MultiVideo = ({ videos, videoRef, mouseEnter, mouseLeave, setVideo }) => {
  console.log(videos);
  return (
    <>
      {videos.map((video, index) => {
        return (
          <video
            src={video}
            ref={(id) => (videoRef.current[index] = id)}
            onMouseEnter={() => mouseEnter(index)}
            onMouseLeave={() => mouseLeave(index)}
            onClick={() => setVideo(video)}
            muted
            width="250px"
            height="250px"
          ></video>
        );
      })}
    </>
  );
};

export default MultiVideo;
