import Container from '@/components/ui/Container';
import Link from 'next/link';
import React from 'react';
import CategoryMenu from '../CategoryMenu';
import { getCategories } from '@/actions/get-categories';
import NavbarActions from '../NavbarActions';

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <>
      <div className="bg-secondary-bg">
        <Container>
          <div className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            <Link href="/" className="flex gap-x-2 hover:animate-pulse">
              <p className="font-bold text-xl text-primary">DELICIOUS</p>
            </Link>
            <NavbarActions />
          </div>
        </Container>
      </div>
      <Container className="flex justify-center items-center pt-4 sm:pt-6 bg-white">
        <CategoryMenu data={categories} />
      </Container>
    </>
  );
};

export default Navbar;
