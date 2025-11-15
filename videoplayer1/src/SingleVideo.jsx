import React from "react";

const SingleVideo = ({ video, videoRef, handleClick }) => {
  return (
    <>
      <video src={video} ref={videoRef} onClick={handleClick}></video>
    </>
  );
};

export default SingleVideo;
