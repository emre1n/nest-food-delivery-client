import Image from 'next/image';
import React from 'react';

interface GalleryProps {
  image: string;
}

const Gallery: React.FC<GalleryProps> = ({ image }) => {
  return (
    <div className="w-[360px] h-[360px] flex justify-center items-center overflow-hidden rounded-xl">
      <div className="aspect-square rounded-xl relative">
        <Image
          className="bg-center"
          src={image}
          alt="meal"
          width={360}
          height={800}
        />
      </div>
    </div>
  );
};

export default Gallery;
