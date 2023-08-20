'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { BsCart3 } from 'react-icons/bs';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4">
      <Button className="relative flex items-center rounded-full text-purple bg-secondary-bg px-4 py-2 transition-opacity">
        <span className="absolute top-0 right-2 flex justify-center items-center bg-green w-[22px] h-[22px] text-white text-[10px] rounded-[50%]">
          1
        </span>
        <span className="mr-2 text-sm font-medium text-green">€1,99</span>
        <BsCart3 size={30}></BsCart3>
      </Button>
    </div>
  );
};

export default NavbarActions;
