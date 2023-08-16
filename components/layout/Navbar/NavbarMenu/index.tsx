'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Category } from '@/lib/types';

interface LinkCategory {
  href: string;
  label: string;
  active: boolean;
}

interface NavbarMenuProps {
  data: Category[];
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ data }) => {
  const pathname = usePathname();

  const categories = data.map((category: Category) => ({
    href: `/category/${category.id}`,
    label: category.name,
    active: pathname === `/category/${category.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center gap-x-4 leg:gap-x-6">
      {categories.map((category: LinkCategory) => (
        <Link
          key={category.href}
          href={category.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            category.active ? 'text-primary' : 'text-neutral-500'
          )}
        >
          {category.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarMenu;
