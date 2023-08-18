'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { BsBasket3 } from 'react-icons/bs';

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
      <Button className="flex items-center rounded-full bg-green px-4 py-2 transition-opacity">
        <BsBasket3 size={20} />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
