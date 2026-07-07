'use client';

import React from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
}

export default function VideoBackground({ videoUrl }: VideoBackgroundProps) {

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Absolute layout backdrop to mask video detail into premium darkness */}
      <div className="absolute inset-0 bg-background/85 md:bg-background/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
      
      <video
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover scale-102 filter blur-sm md:blur-md opacity-30 select-none pointer-events-none"
      />
    </div>
  );
}
