import { getBillboard } from '@/actions/get-billboard';
import Billboard from '@/components/home/Billboard';
import Container from '@/components/ui/Container';
import React from 'react';

const HomePage = async () => {
  const billboard = await getBillboard(1);

  return (
    <Container>
      <Billboard data={billboard} />
    </Container>
  );
};

export default HomePage;
