'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Category } from '@/lib/types';

interface LinkCategory {
  id: number;
  href: string;
  label: string;
  active: boolean;
  isDeleted: boolean;
}

interface CategoryMenuProps {
  data: Category[];
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ data }) => {
  const pathname = usePathname();

  const categories = data.map((category: Category) => ({
    id: category.id,
    href: `/category/${category.id}`,
    label: category.name,
    active: pathname === `/category/${category.id}`,
    isDeleted: category.deleted,
  }));

  const sortedCategories = categories.slice().sort((a, b) => a.id - b.id);

  return (
    <nav className="mx-6 flex items-center gap-x-4 lg:gap-x-6">
      {sortedCategories.map(
        (category: LinkCategory) =>
          !category.isDeleted && (
            <Link
              key={category.href}
              href={category.href}
              className={cn(
                'text-sm font-medium hover:text-primary border-b border-b-white hover:border-b-primary transition-colors',
                category.active ? 'text-primary' : 'text-neutral-500'
              )}
            >
              {category.label}
            </Link>
          )
      )}
    </nav>
  );
};

export default CategoryMenu;
