import Button from '@/components/ui/Button';
import CurrencyDisplay from '@/components/ui/CurrencyDisplay';
import { MenuItem } from '@/lib/types';
import React from 'react';

interface InfoProps {
  data: MenuItem;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-purple">
          <CurrencyDisplay value={data?.price} currencyCode={data?.currency} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col items-start gap-x-5">
        <h3 className="font-semibold text-primary">Description</h3>
        <div>{data?.description}</div>
      </div>

      <Button className="flex justify-center items-center w-full h-10 mt-8 bg-orange text-white rounded-lg">
        ADD TO CART
      </Button>
    </div>
  );
};

export default Info;
