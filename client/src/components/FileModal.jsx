// import React, { useState } from 'react';
// import Modal from 'react-modal';

// const FileModal = ({ fileUrl }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const getFileTypeFromUrl = (url) => {
//     const extension = url.split('.').pop().toLowerCase();
//     const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
//     const videoExtensions = ['mp4', 'mpeg', 'ogg'];

//     if (imageExtensions.includes(extension)) {
//       return 'image';
//     } else if (videoExtensions.includes(extension)) {
//       return 'video';
//     } else if (extension === 'pdf') {
//       return 'pdf';
//     } else if (extension === 'zip') {
//       return 'zip';
//     } else {
//       return 'file';
//     }
//   };

//   const fileType = getFileTypeFromUrl(fileUrl);

//   const openFullView = () => {
//     if (['pdf', 'image', 'video'].includes(fileType)) {
//       window.open(fileUrl, '_blank');
//     } else if (fileType === 'zip') {
//       window.location.href = fileUrl;
//     }
//   };

//   const renderPreview = () => {
//     const urlArray = fileUrl.split('/');
//     const fileName = urlArray[urlArray.length - 1];

//     if (fileType === 'pdf') {
//       return (
//         <div className="pdf-preview" onClick={openFullView}>
//           <h4>{fileName}</h4>
//           <button>Click to open PDF</button>
//         </div>
//       );
//     } else if (fileType === 'zip') {
//       return (
//         <div className="zip-preview" onClick={openFullView}>
//           <h4>{fileName}</h4>
//           <button>Click to download ZIP</button>
//         </div>
//       );
//     } else if (fileType === 'image') {
//       return (
//         <div className="image-preview" onClick={openModal}>
//           <h4>{fileName}</h4>
//           <button>Click to open Image</button>
//         </div>
//       );
//     } else if (fileType === 'video') {
//       return (
//         <div className="video-preview" onClick={openModal}>
//           <h4>{fileName}</h4>
//           <button>Click to open Video</button>
//         </div>
//       );
//     } else {
//       return (
//         <div className="file-preview" onClick={openModal}>
//           <button>Click to open File</button>
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
//         {/* Add content for modal */}
//       </Modal>
//     </div>
//   );
// };

// export default FileModal;











import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';

import styled from '@mui/system/styled';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { OpenInNew, CloudDownload } from '@mui/icons-material';
import { LessonContext } from '../context/lessons.context';
const CenteredContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const FileListContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  justifyContent: 'center',
  border: '1px solid #333',
  padding: '16px',
  borderRadius: '8px',
});
const FileCard = styled(Card)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px',
  borderRadius: '10px',
});

const FileIcon = styled(Typography)({
  fontSize: '2em',
  marginRight: '8px',
  
});

const ButtonsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});


const FileModal = ({ fileUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const downloadFile = (fileName, fileUrl) => {
    console.log(`Downloading file: ${fileName}`);

    // Use the Fetch API to download the file
    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
      })
      .catch((error) => console.error('Error downloading file:', error));
  };



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
        <FileCard key={fileName}>
          <FileIcon> 📄 </FileIcon>
          <div style={{display: 'flex', alignItems: 'center'}}>

          <CardContent>
            <Typography variant="body1">{fileName}</Typography>
          </CardContent>
          <ButtonsContainer style={{ marginLeft: 'auto' }}>
            <IconButton color="primary" onClick={openFullView} className='colorIcon'>
              <OpenInNew />
            </IconButton>
            <IconButton color="primary" onClick={() => downloadFile(fileName, fileUrl)}  className='colorIcon'>
              <CloudDownload />
            </IconButton>
          </ButtonsContainer>
          </div>
        </FileCard>
      );
    } else if (fileType === 'zip') {
      return (
        <FileCard key={fileName}>
        <FileIcon> 📁 </FileIcon>
        <CardContent>
          <Typography variant="body1">{fileName}</Typography>
        </CardContent>
        <ButtonsContainer>

          <IconButton color="primary" onClick={openFullView}  className='colorIcon'>
            <OpenInNew />
          </IconButton>
          <IconButton color="primary" onClick={() => downloadFile(fileName, fileUrl)} className='colorIcon'>
            <CloudDownload />
          </IconButton>
        </ButtonsContainer>
      </FileCard>
      );
    } else if (fileType === 'image') {
      return (

        <FileCard key={fileName}>
        <FileIcon> 📷 </FileIcon>
        <CardContent>
          <Typography variant="body1">{fileName}</Typography>
        </CardContent>
        <ButtonsContainer>
          <IconButton color="primary" onClick={openFullView}  className='colorIcon'>
            <OpenInNew />
          </IconButton>
          <IconButton color="primary" onClick={() => downloadFile(fileName, fileUrl)}  className='colorIcon'>
            <CloudDownload />
          </IconButton>
        </ButtonsContainer>
      </FileCard>
      );
    } else if (fileType === 'video') {
      return (
        // <div className="video-preview" onClick={openModal}>
        //   <h4>{fileName}</h4>
        //   <button>Click to open Video</button>
        // </div>
        <FileCard key={fileName}>
        <FileIcon> 🎥 </FileIcon>
        <CardContent>
          <Typography variant="body1">{fileName}</Typography>
        </CardContent>
        <ButtonsContainer>
          <IconButton color="primary" onClick={openFullView}  className='colorIcon'>
            <OpenInNew />
          </IconButton>
          <IconButton color="primary" onClick={() => downloadFile(fileName, fileUrl)}  className='colorIcon'>
            <CloudDownload />
          </IconButton>
        </ButtonsContainer>
      </FileCard>
      );
    } else {
      return (
        // <div className="file-preview" onClick={openModal}>
        //   <button>Click to open File</button>
        // </div>
        <FileCard key={fileName}>
        <CardContent>
          <Typography variant="body1">{fileName}</Typography>
        </CardContent>
        <ButtonsContainer>
          <IconButton color="primary" onClick={openFullView}  className='colorIcon'>
            <OpenInNew />
          </IconButton>
          <IconButton color="primary" onClick={() => downloadFile(fileName, fileUrl)}  className='colorIcon'>
            <CloudDownload />
          </IconButton>
        </ButtonsContainer>
      </FileCard>
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



// import React, { useContext } from 'react';
// import styled from '@mui/system/styled';
// import { Card, CardContent, Typography, IconButton } from '@mui/material';
// import { OpenInNew, CloudDownload } from '@mui/icons-material';
// import { LessonContext } from '../context/lessons.context';
// const CenteredContainer = styled('div')({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
// });

// const FileListContainer = styled('div')({
//   display: 'flex',
//   flexWrap: 'wrap',
//   gap: '16px',
//   justifyContent: 'center',
//   border: '1px solid #333',
//   padding: '16px',
//   borderRadius: '8px',
// });
// const FileCard = styled(Card)({
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   padding: '8px',
//   borderRadius: '10px',
// });

// const FileIcon = styled(Typography)({
//   fontSize: '2em',
//   marginRight: '8px',
// });

// const ButtonsContainer = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
// });

// const FileList = () => {
//   const { currentLesson } = useContext(LessonContext);
//   const files = currentLesson?.content || [];

//   const openFile = (fileName) => {
//     console.log(`Opening file: ${fileName}`);
//   };

//   const downloadFile = (fileName) => {
//     console.log(`Downloading file: ${fileName}`);
//   };

//   return (
//     <CenteredContainer>
//       <FileListContainer>
//         {files.map((file) => (
//           <FileCard key={file}>
//             <FileIcon>
//               {file.type === 'pdf' && '📄'}
//               {file.type === 'jpg' && '📷'}
//               {file.type === 'xlsx' && '📊'}
//             </FileIcon>
//             <CardContent>
//               <Typography variant="body1">{file.name}</Typography>
//             </CardContent>
//             <ButtonsContainer>
//               <IconButton color="primary" onClick={() => openFile(file.name)}>
//                 <OpenInNew />
//               </IconButton>
//               <IconButton color="primary" onClick={() => downloadFile(file.name)}>
//                 <CloudDownload />
//               </IconButton>
//             </ButtonsContainer>
//           </FileCard>
//         ))}
//       </FileListContainer>
//     </CenteredContainer>
//   );
// };

// export default FileList;