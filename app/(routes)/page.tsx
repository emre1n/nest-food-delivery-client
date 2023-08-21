import { getBillboard } from '@/actions/get-billboard';
import { getMenuItems } from '@/actions/get-menuItems';
import Billboard from '@/components/home/Billboard';
import Container from '@/components/ui/Container';
import React from 'react';

const HomePage = async () => {
  const menuItems = await getMenuItems({ isFeatured: true });
  const billboard = await getBillboard(1);
  console.log('menuItems', menuItems);
  return (
    <Container>
      <Billboard data={billboard} />
    </Container>
  );
};

export default HomePage;
