import { Billboard } from '@/lib/types';

const URL = process.env.NEST_API_URL
  ? `${process.env.NEST_API_URL}/billboard`
  : (() => {
      throw new Error('ENV variable not set');
    })();

export const getBillboard = async (id: number): Promise<Billboard> => {
  try {
    const res = await fetch(`${URL}/${id}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Request failed');

    const data: Billboard = await res.json();
    return data;
  } catch (error) {
    throw new Error('Failed to get billboard');
  }
};
