import { getMenuItem } from '@/actions/get-menuItem';
import { getMenuItems } from '@/actions/get-menuItems';
import React from 'react';

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

  return <div>Individual Product</div>;
}

export default MenuItemPage;
