"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
function VideoPlayer({ videoId }) {
  const [isOpen, setIsOpens] = useState(true);
  const option = {
    width: "300",
    height: "250",
  };
  const handleVideoPlayer = () => {
    setIsOpens((prev) => !prev);
  };

  return isOpen ? (
    <div className="fixed bottom-0 right-2">
      <button
        onClick={handleVideoPlayer}
        className="float-right mb-1 text-color-primary"
      >
        <IoClose size={24} />
      </button>
      <YouTube
        videoId={videoId}
        onReady={(e) => e.target.pauseVideo()}
        opts={option}
      />
    </div>
  ) : (
    <button
      onClick={handleVideoPlayer}
      className="fixed px-2 rounded-sm bottom-5 right-5 bg-color-primary text-color-dark"
    >
      Tonton Trailer
    </button>
  );
}

export default VideoPlayer;
