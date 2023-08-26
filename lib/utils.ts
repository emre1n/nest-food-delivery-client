import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Currency } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currencyCode: string): string {
  const currencyLocale = currencyCode === Currency.USD ? 'en-US' : 'tr-TR';

  const formattedCurrency = new Intl.NumberFormat(currencyLocale, {
    style: 'currency',
    currency: currencyCode,
  }).format(value);

  return formattedCurrency;
}

export { Currency };
