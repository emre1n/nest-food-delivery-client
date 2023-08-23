import MenuItemCard from '@/components/ui/MenuItemCard';
import NoResults from '@/components/ui/NoResults';
import { MenuItem } from '@/lib/types';
import React from 'react';

interface FeaturedProps {
  title: string;
  items: MenuItem[];
}

const Featured: React.FC<FeaturedProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-2xl text-primary">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(item => (
          <MenuItemCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
