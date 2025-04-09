import React, { useState, useRef, useEffect } from "react";

const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-play video when component mounts
  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          // Try to play video automatically
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        // Auto-play might be blocked by browser
        console.error("Video autoplay was prevented:", err);
        setIsPlaying(false);
      }
    };

    playVideo();
  }, []);

  return (
    <div className="how-it-works-container">
      <div className="video-section">
        <div className="video-wrapper">
          <video ref={videoRef} className="video-player" loop muted playsInline>
            {/* Path to video in public folder */}
            <source src="/video/-8422-415f-bb8b-ea2402c5fa73.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button className={`pause-button ${isPlaying ? "playing" : "paused"}`} onClick={togglePlayPause} aria-label={isPlaying ? "Pause video" : "Play video"}>
            {isPlaying ? "II" : "▶"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
