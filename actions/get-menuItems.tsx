import { MenuItem } from '@/lib/types';

const URL = process.env.NEST_API_URL
  ? `${process.env.NEST_API_URL}/menu-item`
  : (() => {
      throw new Error('ENV variable not set');
    })();

export const getMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const res = await fetch(URL, { cache: 'no-store' });
    if (!res.ok) throw new Error('Request failed');

    const data: MenuItem[] = await res.json();
    return data;
  } catch (error) {
    throw new Error('Failed to get menuItems');
  }
};
