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
      <div className="flex gap-8 px-8">
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
