'use client';

import React, { useEffect, useState } from 'react';

import { formatCurrency, Currency } from '@/lib/utils';

interface CurrencyDisplayProps {
  value: number;
  currencyCode: string;
}

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({
  value,
  currencyCode,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const formattedCurrency = formatCurrency(value, currencyCode);
  return <span className="font-semibold">{formattedCurrency}</span>;
};

export default CurrencyDisplay;
