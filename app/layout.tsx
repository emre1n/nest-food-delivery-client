import './globals.css';
import type { Metadata } from 'next';
import { roboto, robotoSlab } from './fonts';

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
      <body>{children}</body>
    </html>
  );
}
