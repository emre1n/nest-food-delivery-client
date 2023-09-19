import { getCategory } from '@/actions/get-category';
import { getMenuItems } from '@/actions/get-menuItems';
import Container from '@/components/ui/Container';
import MenuItemCard from '@/components/ui/MenuItemCard';
import React from 'react';

export const revalidate = 0;

interface CategoryPageProps {
  params: { categoryId: number };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const items = await getMenuItems({
    categoryId: params.categoryId,
  });

  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(item => (
            <MenuItemCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
