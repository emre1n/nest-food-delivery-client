import React from 'react';

import { getBillboard } from '@/actions/get-billboard';
import { getMenuItems } from '@/actions/get-menuItems';

import Container from '@/components/ui/Container';
import Billboard from '@/components/home/Billboard';
import Featured from '@/components/home/Featured';

const HomePage = async () => {
  const featuredMenuItems = await getMenuItems({ isFeatured: true });
  const billboard = await getBillboard(1);
  return (
    <Container>
      <Billboard data={billboard} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <Featured title="Featured Menu" items={featuredMenuItems} />
      </div>
    </Container>
  );
};

export default HomePage;
