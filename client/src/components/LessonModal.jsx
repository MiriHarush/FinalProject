import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ImageIcon from '@mui/icons-material/Image';
import VideoIcon from '@mui/icons-material/PlayArrow';
import PdfIcon from '@mui/icons-material/Description';
import ZipIcon from '@mui/icons-material/Folder';
import LinkIcon from '@mui/icons-material/Link';

const LessonModal = ({ open, onClose, lesson }) => {
  const [contentType, setContentType] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const handleUpload = () => {
    // Handle the file upload logic based on the selected content type
    console.log('Content Type:', contentType);
    console.log('File uploaded:', uploadedFile);
    // You can add additional logic to handle the uploaded file and content type
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
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Typography variant="h5" component="div">
          {lesson.title}
        </Typography>
        <Typography variant="body1" component="div">
          {lesson.content}
        </Typography>
        {/* Content type dropdown */}
        <FormControl style={{ marginTop: '10px', minWidth: '120px' }}>
          <Select
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Content Type' }}
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
        {/* File upload section based on content type */}
        {contentType && (
          <>
            {contentType !== 'link' && (
              <>
                <input type="file" onChange={handleFileChange} />
                <Button
                  onClick={handleUpload}
                  color="primary"
                  variant="contained"
                  style={{ marginTop: '20px' }}
                >
                  Upload {contentType.toUpperCase()}
                </Button>
              </>
            )}
            {contentType === 'link' && (
              <>
                <input
                  type="text"
                  placeholder="Enter Link URL"
                  style={{ marginTop: '10px', width: '100%' }}
                />
                <Button
                  onClick={handleUpload}
                  color="primary"
                  variant="contained"
                  style={{ marginTop: '20px' }}
                >
                  Add Link
                </Button>
              </>
            )}
          </>
        )}
        {/* Close button */}
        <Button onClick={onClose} color="primary" variant="contained" style={{ marginTop: '10px' }}>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LessonModal;
