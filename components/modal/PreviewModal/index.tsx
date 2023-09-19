'use client';

import Gallery from '@/components/item/Gallery';
import Info from '@/components/item/Info';
import Modal from '@/components/ui/Modal';
import usePreviewModal from '@/hooks/use-preview-modal';
import React from 'react';

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const item = usePreviewModal(state => state.data);

  if (!item) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery image={item.image} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={item} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
