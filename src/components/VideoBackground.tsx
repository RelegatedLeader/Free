"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  children?: React.ReactNode;
}

export default function VideoBackground({
  src,
  poster,
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays on load
    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    };

    // Try to play when metadata is loaded
    video.addEventListener("loadedmetadata", playVideo);
    video.addEventListener("canplay", () => setIsLoaded(true));

    // Attempt immediate play
    playVideo();

    return () => {
      video.removeEventListener("loadedmetadata", playVideo);
      video.removeEventListener("canplay", () => setIsLoaded(true));
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 dark:from-black/60 dark:via-black/50 dark:to-black/70 transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
