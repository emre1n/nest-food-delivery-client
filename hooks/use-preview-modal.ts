import { create } from 'zustand';

import { MenuItem } from '@/lib/types';

interface PreviewModalStore {
  isOpen: boolean;
  data?: MenuItem;
  onOpen: (data: MenuItem) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>(set => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: MenuItem) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
