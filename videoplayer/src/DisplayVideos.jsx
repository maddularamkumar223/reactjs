import React from "react";

const DisplayVideos = ({
  videoList,
  videoRef,
  mouseEnter,
  mouseLeave,
  singleVideo,
}) => {
  return (
    <>
      {videoList.map((value, index) => {
        return (
          <video
            src={value}
            ref={(el) => (videoRef.current[index] = el)}
            onMouseEnter={() => mouseEnter(index)}
            onMouseLeave={() => mouseLeave(index)}
            onClick={() => singleVideo(value)}
            muted
          ></video>
        );
      })}
    </>
  );
};

export default DisplayVideos;
