'use client';

import { MenuItem } from '@/lib/types';
import Image from 'next/image';
import React from 'react';
import IconButton from '../IconButton';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { BiSolidCart } from 'react-icons/bi';
import CurrencyDisplay from '../CurrencyDisplay';
import { useRouter } from 'next/navigation';

interface MenuItemCardProps {
  data: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/item/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group p-3 space-y-4 bg-white border rounded-xl cursor-pointer"
    >
      <div className="aspect-square rounded-xl relative">
        <Image
          className="aspect-square object-cover rounded-xl bg-element-bg"
          src={data?.image}
          alt={data.name}
          width={500}
          height={500}
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-36">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={
                <BsArrowsAngleExpand size={20} className="text-secondary" />
              }
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full pt-2">
          <p className="pb-2 font-semibold text-lg">{data.name}</p>
          <div className="flex items-center justify-between pb-4 text-purple">
            <CurrencyDisplay
              value={data?.price}
              currencyCode={data?.currency}
            />
          </div>
          <button className="flex justify-center items-center w-full h-10 bg-orange text-white rounded-lg">
            <BiSolidCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;

// test commit
