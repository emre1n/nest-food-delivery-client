import Image from 'next/image';
import React from 'react';

interface GalleryProps {
  image: string;
}

const Gallery: React.FC<GalleryProps> = ({ image }) => {
  return (
    <div className="w-[400px] h-[400px] flex justify-center items-center overflow-hidden rounded-xl">
      <div className="aspect-square rounded-xl relative">
        <Image
          className="bg-center"
          src={image}
          alt="meal"
          width={400}
          height={800}
        />
      </div>
    </div>
  );
};

export default Gallery;
