import Container from '@/components/ui/Container';
import Link from 'next/link';
import React from 'react';
import NavbarMenu from '../NavbarMenu';
import { getCategories } from '@/actions/get-categories';

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-secondary-bg">
      <Container>
        <div className="relative flex items-center px-4 sm:px-6 lg:px-8 h-16">
          <Link href="/" className="flex gap-x-2 hover:animate-pulse">
            <p className="font-bold text-xl text-primary">DELICIOUS</p>
          </Link>
          <NavbarMenu data={categories} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
