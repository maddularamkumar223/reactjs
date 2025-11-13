import React from "react";

const SingleVideo = ({ video, handleClick, videoRef }) => {
  return (
    <>
      <video
        src={video}
        height={"100%"}
        onClick={handleClick}
        ref={videoRef}
      ></video>
    </>
  );
};

export default SingleVideo;
