"use client";

import React from 'react';
import Image from 'next/image'; // Ensure you're using Next.js Image component

const PhotoSection = () => {
  return (
    <div className="h-screen relative">
      <Image
        src="/images/bear.jpg" // Update with your image path
        alt="Description of the image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-90"
      />
    </div>
  );
};

export default PhotoSection;