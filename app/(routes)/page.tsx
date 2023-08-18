import Billboard from '@/components/home/Billboard';
import Container from '@/components/ui/Container';
import React from 'react';

const data = {
  title: 'Welcome to Delicious Delivery',
  subtitle: 'Get Your Favorite Meals Delivered in Minutes',
  imageUrl:
    'https://plus.unsplash.com/premium_photo-1663853052087-9d4f1d70d23e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
};

const HomePage = () => {
  return (
    <Container>
      <Billboard data={data} />
    </Container>
  );
};

export default HomePage;

// ALTERNATIVE BILLBOARD IMAGE
// imageUrl:
//     'https://images.unsplash.com/photo-1595187139760-5cedf9ab5850?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1531&q=80'
