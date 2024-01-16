// import React, { useContext, useState, useEffect } from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import ImageIcon from '@mui/icons-material/Image';
// import VideoIcon from '@mui/icons-material/PlayArrow';
// import PdfIcon from '@mui/icons-material/Description';
// import ZipIcon from '@mui/icons-material/Folder';
// import LinkIcon from '@mui/icons-material/Link';
// import { Card, CardContent } from '@mui/material';
// import FileModal from '../components/FileModal';
// import { LessonContext } from '../context/lessons.context';
// import { CourseContext } from '../context/courses.context';
// import { useLocation } from 'react-router-dom';


// const LessonModal = () => {
//   const [contentType, setContentType] = useState('');
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const { currentLesson, uploadFile } = useContext(LessonContext);
//   const { currentCourse } = useContext(CourseContext);
//   const [files, setFiles] = useState([]);
//   const [filesChanges, setFilesChanges] = useState(0);

//   const location = useLocation();
//   const { isManager } = location.state;
//   console.log(isManager);

//   // Allowed content types for each option
//   const allowedContentTypes = {
//     image: ['image/jpeg', 'image/png', 'image/gif'],
//     video: ['video/mp4', 'video/mpeg', 'video/ogg'],
//     pdf: ['application/pdf'],
//     zip: ['application/zip'],
//     link: [], // No file for link
//   };

//   const [fileError, setFileError] = useState('');
//   const [filePreview, setFilePreview] = useState(null);
//   const [newContent, setNewContent] = useState(null);


//   useEffect(() => {
//     console.log(newContent);
//     setFiles(newContent);
//   }, [newContent]);


//   useEffect(() => {
//     console.log(files);

//   }, [files]);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];

//     // Check the file format
//     const validFormats = allowedContentTypes[contentType] || [];
//     if (file && !validFormats.includes(file.type)) {
//       // Display an error message
//       setFileError('Invalid file format. Please choose a valid file.');
//       setFilePreview(null);
//       setUploadedFile(null);
//     } else {
//       setFileError(''); // Clear the error message
//       // setFilePreview(file ? URL.createObjectURL(file) : null);
//       setFilePreview(file);
//       setUploadedFile(file);
//     }
//   };

//   const getType = (file) => {
//     const url = file;
//     const urlArray = url.split('/');
//     const myFile = urlArray[urlArray.length - 1];
//     const fileName = myFile.split('.')[1];
//     return fileName;
//   }

//   const handleUpload = async () => {
//     const myData = new FormData();
//     myData.append('file', filePreview);

//     // Check if the uploaded file type is allowed for the selected content type
//     console.log("upload", uploadedFile);
//     if (allowedContentTypes[contentType].includes(uploadedFile.type)) {

//       const newFile = await uploadFile(currentLesson._id, myData);
//       currentLesson.content = newFile.result.content;
//       setNewContent(currentLesson.content)
//       setFilesChanges(filesChanges+1)
//       console.log(currentLesson.content);
//     } else {
//       alert('Invalid file type for the selected content type.');
//     }
//   };

//   const getIcon = (value) => {
//     switch (value) {
//       case 'image':
//         return <ImageIcon />;
//       case 'video':
//         return <VideoIcon />;
//       case 'pdf':
//         return <PdfIcon />;
//       case 'zip':
//         return <ZipIcon />;
//       case 'link':
//         return <LinkIcon />;
//       default:
//         return null;
//     }
//   };


//   return (
//     <Card style={{ margin: '10px', width: '45%' }}>
//       <CardContent>
//         {console.log(currentLesson)}
//         <Typography variant="h4" component="div">
//           {currentLesson?.lessonName}
//         </Typography>
//         <hr />
//         <Typography variant="body1" component="div">
//           {/* {currentLesson?.content.map((file) => {
//             return <FileModal fileType={getType(file)} fileUrl={file} />
//           })} */}
//           {files?.map((file) => {
//             return <FileModal fileType={getType(file)} fileUrl={file} />
//           })}
//         </Typography>
//         <br />
//         <br />
//         <br />
//         {isManager === 'true' && (
//           <>
//             <Typography variant="h6" component="div">
//               Adding a file:
//             </Typography>
//             <FormControl style={{ marginTop: '10px', minWidth: '120px' }}>
//               <Select
//                 value={contentType}
//                 onChange={(e) => setContentType(e.target.value)}
//                 displayEmpty
//                 inputProps={{ 'aria-label': 'Content Type' }}
//               >
//                 <MenuItem value="" disabled>
//                   Select Type
//                 </MenuItem>
//                 <MenuItem value="image">{getIcon('image')} Image</MenuItem>
//                 <MenuItem value="video">{getIcon('video')} Video</MenuItem>
//                 <MenuItem value="pdf">{getIcon('pdf')} PDF</MenuItem>
//                 <MenuItem value="zip">{getIcon('zip')} ZIP Folder</MenuItem>
//                 <MenuItem value="link">{getIcon('link')} Link</MenuItem>
//               </Select>
//             </FormControl>
//             {contentType && (
//               <>
//                 {contentType !== 'link' && (
//                   <>
//                     <input type="file" onChange={handleFileChange} />
//                     <Button
//                       onClick={handleUpload}
//                       color="primary"
//                       variant="contained"
//                       style={{ marginTop: '20px' }}
//                     >
//                       Upload {contentType.toUpperCase()}
//                     </Button>
//                     {fileError && <p style={{ color: 'red', marginTop: '10px' }}>{fileError}</p>}
//                   </>
//                 )}
//                 {contentType === 'link' && (
//                   <>
//                     <input
//                       type="text"
//                       placeholder="Enter Link URL"
//                       style={{ marginTop: '10px', width: '100%' }}
//                     />
//                     <Button
//                       onClick={handleUpload}
//                       color="primary"
//                       variant="contained"
//                       style={{ marginTop: '20px' }}
//                     >
//                       Add Link
//                     </Button>
//                   </>
//                 )}
//               </>
//             )}
//           </>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default LessonModal;

import React, { useContext, useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Button from '@mui/material-next/Button';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ImageIcon from '@mui/icons-material/Image';
import VideoIcon from '@mui/icons-material/PlayArrow';
import PdfIcon from '@mui/icons-material/Description';
import ZipIcon from '@mui/icons-material/Folder';
import LinkIcon from '@mui/icons-material/Link';
import { Card, CardContent } from '@mui/material';
import FileModal from '../components/FileModal';
import { LessonContext } from '../context/lessons.context';
import { CourseContext } from '../context/courses.context';
import { useLocation } from 'react-router-dom';


const LessonModal = () => {
  const [contentType, setContentType] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const { currentLesson, uploadFile } = useContext(LessonContext);
  const { currentCourse } = useContext(CourseContext);
  const [files, setFiles] = useState([]);
  const [filesChanges, setFilesChanges] = useState(0);

  const location = useLocation();
  const { isManager } = location.state;
  console.log(isManager);

  // Allowed content types for each option
  const allowedContentTypes = {
    image: ['image/jpeg', 'image/png', 'image/gif'],
    video: ['video/mp4', 'video/mpeg', 'video/ogg'],
    pdf: ['application/pdf'],
    zip: ['application/zip'],
    link: [], // No file for link
  };

  const [fileError, setFileError] = useState('');
  const [filePreview, setFilePreview] = useState(null);
  const [newContent, setNewContent] = useState(null);


  useEffect(() => {
    console.log(newContent);
    // setFiles(newContent);
    setFiles(currentLesson.content)

  }, [newContent]);


  useEffect(() => {
    console.log(files);

  }, [files]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Check the file format
    const validFormats = allowedContentTypes[contentType] || [];
    if (file && !validFormats.includes(file.type)) {
      // Display an error message
      setFileError('Invalid file format. Please choose a valid file.');
      setFilePreview(null);
      setUploadedFile(null);
    } else {
      setFileError(''); // Clear the error message
      // setFilePreview(file ? URL.createObjectURL(file) : null);
      setFilePreview(file);
      setUploadedFile(file);
    }
  };

  const getType = (file) => {
    const url = file;
    const urlArray = url.split('/');
    const myFile = urlArray[urlArray.length - 1];
    const fileName = myFile.split('.')[1];
    return fileName;
  }

  const handleUpload = async () => {
    const myData = new FormData();
    myData.append('file', filePreview);

    // Check if the uploaded file type is allowed for the selected content type
    console.log("upload", uploadedFile);
    if (allowedContentTypes[contentType].includes(uploadedFile.type)) {

      const newFile = await uploadFile(currentLesson._id, myData);
      currentLesson.content = newFile.result.content;
      setNewContent(currentLesson.content)
      setFilesChanges(filesChanges + 1)
      console.log(currentLesson.content);
    } else {
      alert('Invalid file type for the selected content type.');
    }
  };

  const getIcon = (value) => {
    switch (value) {
      case 'image':
        return <ImageIcon />;
      case 'video':
        return <VideoIcon />;
      case 'pdf':
        return <PdfIcon />;
      case 'zip':
        return <ZipIcon />;
      case 'link':
        return <LinkIcon />;
      default:
        return null;
    }
  };


  return (
    <div className='centerContainer'>

      <Card style={{ margin: '10px', width: '45%' }} className='courseCard'>
        <CardContent>
          {console.log(currentLesson)}
          <Typography variant="h4" component="div">
            {currentLesson?.lessonName}
          </Typography>
          <hr />
          <Typography variant="body1" component="div" >
            {files?.map((file, index) => (
              <>
                <FileModal key={index} fileType={getType(file)} fileUrl={file} />
                <div style={{ marginBottom: '10px' }} />
              </>
            ))}
          </Typography>

          <br />
          <br />
          <br />
          {isManager === 'true' && (
            <>
              <Typography variant="h6" component="div">
                Adding a file:
              </Typography>
              <FormControl >
                <Select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Content Type' }}
                  sx={{
                    backgroundColor: 'rgb(174, 124, 61)',
                    color: 'white',
                    marginBottom: '20px',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.178)',
                      color: 'rgb(174, 124, 61)',
                      borderColor: 'rgb(174, 124, 61)',
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Type
                  </MenuItem>
                  <MenuItem value="image">{getIcon('image')} Image</MenuItem>
                  <MenuItem value="video">{getIcon('video')} Video</MenuItem>
                  <MenuItem value="pdf">{getIcon('pdf')} PDF</MenuItem>
                  <MenuItem value="zip">{getIcon('zip')} ZIP Folder</MenuItem>
                  <MenuItem value="link">{getIcon('link')} Link</MenuItem>
                </Select>
              </FormControl>
              {contentType && (
                <>
                  {contentType !== 'link' && (
                    <>
                      <input type="file" onChange={handleFileChange} />
                      <Button
                        onClick={handleUpload}
                        color="primary"
                        variant="contained"
                        // style={{ marginTop: '20px' }}
                        className='courseButton'

                      >
                        Upload {contentType.toUpperCase()}
                      </Button>
                      {fileError && <p style={{ color: 'red', marginTop: '10px' }}>{fileError}</p>}
                    </>
                  )}
                  {contentType === 'link' && (
                    <>
                      <input
                        type="text"
                        placeholder="Enter Link URL"
                        style={{ marginTop: '10px', width: '100%', color: 'rgb(174, 124, 61)' }}
                      />
                      <Button
                        onClick={handleUpload}
                        color="primary"
                        variant="contained"
                        // className='courseButton'

                      >
                        Add Link
                      </Button>
                    </>
                  )}
                </>
              )}
              {/* {filePreview && (
              <div style={{ marginTop: '10px' }}>
                <Typography variant="body2" color="textSecondary">
                  File Preview:
                  </Typography>
                  <img src={filePreview} alt="File Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                )} */}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonModal;
