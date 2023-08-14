import { Roboto, Roboto_Slab } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const robotoSlab = Roboto_Slab({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
});
