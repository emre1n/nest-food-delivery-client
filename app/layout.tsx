import './globals.css';
import type { Metadata } from 'next';
import { roboto, robotoSlab } from './fonts';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import ModalProvider from '@/providers/modal-provider';

export const metadata: Metadata = {
  title: 'Food Delivery',
  description:
    'Satisfy your cravings with quick and easy delivery! Using our website, get your favorite meals delivered fresh and fast to your home or office.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <body>
        <ModalProvider />
        <Navbar />
        <main className="flex flex-col content-container">{children}</main>
        <Footer copyrightText="Restaurant Delivery" />
      </body>
    </html>
  );
}
