'use client';

import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
}

export default function VideoBackground({ videoUrl }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle HLS (.m3u8) streams if supported
    if (videoUrl.endsWith('.m3u8')) {
      import('hls.js').then((module) => {
        const Hls = module.default;
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(videoUrl);
          hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = videoUrl;
        }
      });
    } else {
      video.src = videoUrl;
    }
  }, [videoUrl]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Absolute layout backdrop to mask video detail into premium darkness */}
      <div className="absolute inset-0 bg-background/85 md:bg-background/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
      
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover scale-102 filter blur-sm md:blur-md opacity-30 select-none pointer-events-none"
      />
    </div>
  );
}
