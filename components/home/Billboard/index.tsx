import { Billboard } from '@/lib/types';
import React from 'react';

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center bg-gradient-to-b"
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col justify-center items-center text-center gap-y-4 h-full w-full">
          <h1 className="z-10 text-white font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.title}
          </h1>
          <p className="z-10 text-white">{data.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
