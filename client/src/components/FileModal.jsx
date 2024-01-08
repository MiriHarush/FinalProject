import React, { useState } from 'react';
import Modal from 'react-modal';

const FileModal = ({ fileUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getFileTypeFromUrl = (url) => {
    const extension = url.split('.').pop().toLowerCase();
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const videoExtensions = ['mp4', 'mpeg', 'ogg'];
    
    if (imageExtensions.includes(extension)) {
      return 'image';
    } else if (videoExtensions.includes(extension)) {
      return 'video';
    } else if (extension === 'pdf') {
      return 'pdf';
    } else if (extension === 'zip') {
      return 'zip';
    } else {
      return 'file';
    }
  };

  const fileType = getFileTypeFromUrl(fileUrl);

  const openFullView = () => {
    if (['pdf', 'image', 'video'].includes(fileType)) {
      window.open(fileUrl, '_blank');
    } else if (fileType === 'zip') {
      window.location.href = fileUrl;
    }
  };

  const renderPreview = () => {
    const urlArray = fileUrl.split('/');
    const fileName = urlArray[urlArray.length - 1];

    if (fileType === 'pdf') {
      return (
        <div className="pdf-preview" onClick={openFullView}>
          <h4>{fileName}</h4>
          <button>Click to open PDF</button>
        </div>
      );
    } else if (fileType === 'zip') {
      return (
        <div className="zip-preview" onClick={openFullView}>
          <h4>{fileName}</h4>
          <button>Click to download ZIP</button>
        </div>
      );
    } else if (fileType === 'image') {
      return (
        <div className="image-preview" onClick={openModal}>
          <h4>{fileName}</h4>
          <button>Click to open Image</button>
        </div>
      );
    } else if (fileType === 'video') {
      return (
        <div className="video-preview" onClick={openModal}>
          <h4>{fileName}</h4>
          <button>Click to open Video</button>
        </div>
      );
    } else {
      return (
        <div className="file-preview" onClick={openModal}>
          <button>Click to open File</button>
        </div>
      );
    }
  };

  return (
    <div className="file-preview-container">
      {renderPreview()}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
      </Modal>
    </div>
  );
};

export default FileModal;