// import React from 'react';
// import styled from '@mui/system/styled';
// import { Card, CardContent, Typography, IconButton } from '@mui/material';
// import { OpenInNew, CloudDownload } from '@mui/icons-material';

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
//   const files = [
//     { name: 'Document1.pdf', type: 'pdf' },
//     { name: 'Image1.jpg', type: 'jpg' },
//     { name: 'Spreadsheet1.xlsx', type: 'xlsx' },
//   ];

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
//           <FileCard key={file.name}>
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

import React, { useContext } from 'react';
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

const FileList = () => {
  const { currentLesson } = useContext(LessonContext);
  const files = currentLesson?.content || [];

  const openFile = (fileName) => {
    console.log(`Opening file: ${fileName}`);
  };

  const downloadFile = (fileName) => {
    console.log(`Downloading file: ${fileName}`);
  };

  return (
    <CenteredContainer>
      <FileListContainer>
        {files.map((file) => (
          <FileCard key={file}>
            <FileIcon>
              {file.type === 'pdf' && '📄'}
              {file.type === 'jpg' && '📷'}
              {file.type === 'xlsx' && '📊'}
            </FileIcon>
            <CardContent>
              <Typography variant="body1">{file.name}</Typography>
            </CardContent>
            <ButtonsContainer>
              <IconButton color="primary" onClick={() => openFile(file.name)}>
                <OpenInNew />
              </IconButton>
              <IconButton color="primary" onClick={() => downloadFile(file.name)}>
                <CloudDownload />
              </IconButton>
            </ButtonsContainer>
          </FileCard>
        ))}
      </FileListContainer>
    </CenteredContainer>
  );
};

export default FileList;
