import qs from 'query-string';

import { MenuItem } from '@/lib/types';

const URL = process.env.NEST_API_URL
  ? `${process.env.NEST_API_URL}/menu-item`
  : (() => {
      throw new Error('ENV variable not set');
    })();

interface Query {
  categoryId?: number;
  isFeatured?: boolean;
}

export const getMenuItems = async (query: Query): Promise<MenuItem[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        categoryId: query.categoryId,
        isFeatured: query.isFeatured,
      },
    });
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error('Request failed');

    const data: MenuItem[] = await res.json();
    return data;
  } catch (error) {
    throw new Error('Failed to get menuItems');
  }
};
