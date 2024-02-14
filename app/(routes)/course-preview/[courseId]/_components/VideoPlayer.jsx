import React from "react";

const VideoPlayer = ({ videoUrl, poster }) => {
  return (
    // <iframe
    //   className="rumble"
    //   width="1000"
    //   height="250"
    //   src={videoUrl}
    //   frameborder="0"
    //   allowfullscreen
    //   key={videoUrl}
    // ></iframe>
    <video
      src={videoUrl}
      width={1000}
      height={250}
      poster={poster}
      key={videoUrl}
      controls
      className="rounded-sm"
    />
  );
};

export default VideoPlayer;
