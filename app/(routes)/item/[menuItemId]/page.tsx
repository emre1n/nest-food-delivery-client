import { getMenuItem } from '@/actions/get-menuItem';
import { getMenuItems } from '@/actions/get-menuItems';
import Container from '@/components/ui/Container';
import React from 'react';
import { MenuItem } from '../../../../lib/types';
import Featured from '@/components/home/Featured';

interface MenuItemPageProps {
  params: {
    menuItemId: string;
  };
}

async function MenuItemPage({
  params,
}: MenuItemPageProps): Promise<React.ReactElement> {
  const menuItemIdAsNumber = parseInt(params.menuItemId);
  const menuItem = await getMenuItem(menuItemIdAsNumber);
  const suggestedItems = await getMenuItems({
    categoryId: menuItem?.categoryId,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div>Gallery</div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">Info</div>
          </div>
        </div>
        <hr className="my-10" />
        <Featured
          title="You may also like"
          items={suggestedItems.slice(0, 4)}
        />
      </Container>
    </div>
  );
}

export default MenuItemPage;
