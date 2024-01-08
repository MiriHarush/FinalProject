import React, { useState } from 'react';
import Modal from 'react-modal';

// const FileModal = ({ fileType, fileUrl }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };


//   const closeModal = () => {
//     setModalIsOpen(false);
//   };


//   const openFullView = () => {
//     if (['pdf', 'image', 'video'].includes(fileType)) {
//       console.log(fileType, fileUrl);
//       // אם זו קובץ PDF, תמונה או וידאו, נפתח בחלון חדש
//       window.open(fileUrl, '_blank');
//     } else if (fileType === 'zip') {
//       // // אם זו קובץ ZIP, נפתח בחלון חדש ונאפשר הורדה
//       // const newWindow = window.open('', '_blank');
//       // // הוספת כפתור "Download ZIP"
//       // newWindow.document.body.innerHTML = `
//       //   <div style="text-align: center; padding: 20px;">
//       //     <a href="${fileUrl}" download="file.zip">
//       //       <button style="margin-right: 20px;">Download ZIP</button>
//       //     </a>
//       //     <button onclick="window.close()">Close</button>
//       //   </div>
//       // `;

//       document.getElementById('downloadButton').addEventListener('click', function () {
//         // הורדת הקובץ ZIP
//         window.location.href = fileUrl; // fileUrl הוא ה-URL של הקובץ ZIP
//       });

//     }
//   };


//   const renderPreview = () => {
//   const urlArray = fileUrl.split('/');
//   const fileName = urlArray[urlArray.length - 1];
//   // const fileName = file.split('.')[0];

//     if (fileType === 'pdf') {
//       return (
//         <div className="pdf-preview" onClick={openFullView}>
//           {/* <img src="/pdf-icon.png" alt="PDF Preview" /> */}
//           <h4>{fileName}</h4>
//           <button>Click to open PDF</button>
//         </div>
//       );
//     } else if (fileType === 'zip') {
//       return (
//         <div className="zip-preview" onClick={openFullView}>
//           {/* <img src="/zip-icon.png" alt="ZIP Preview" /> */}
//           <h4>{fileName}</h4>
//           <button  id="downloadButton">Click to download ZIP</button>
//         </div>
//       );
//     } else if (['jpeg', 'png', 'gif'].includes(fileType)) {
//       // לסוגי קבצים מסוג תמונה, נוסיף כאן פיקסלים או סמלים נוספים
//       return (
//         <div className="image-preview" onClick={openModal}>
//           {/* <img src={`/image-icon.png`} alt={`${fileType} Preview`} /> */}
//           <h4>{fileName}</h4>
//           <button>Click to open {fileType.toUpperCase()}</button>
//         </div>
//       );
//     } else if (['mp4', 'mpeg', 'ogg'].includes(fileType)) {
//       // לסוגי קבצים מסוג וידאו, נוסיף כאן פיקסלים או סמלים נוספים
//       return (
//         <div className="video-preview" onClick={openModal}>
//           {/* <img src={`/video-icon.png`} alt={`${fileType} Preview`} /> */}
//           <h4>{fileName}</h4>
//           <button>Click to open {fileType.toUpperCase()}</button>
//         </div>
//       );
//     } else {
//       // סוגי קבצים נוספים
//       return (
//         <div className="file-preview" onClick={openModal}>
//           <button>Click to open {fileType.toUpperCase()}</button>
//         </div>
//       );
//     }
//   };


//   return (
//     <div className="file-preview-container">
//       {renderPreview()}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         className="modal-content"
//         overlayClassName="modal-overlay"
//       >
//       </Modal>
//     </div>
//   );
// };

// export default FileModal;






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
        {/* Add content for modal */}
      </Modal>
    </div>
  );
};

export default FileModal;