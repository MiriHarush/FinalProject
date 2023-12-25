// LessonModal.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const LessonModal = ({ open, onClose, lesson }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Typography variant="h5" component="div">
          {lesson.title}
        </Typography>
        <Typography variant="body1" component="div">
          {lesson.content}
        </Typography>
        {/* הוספת כל התכנים הנדרשים */}
        <Button onClick={onClose} color="primary" variant="contained" style={{ marginTop: '20px' }}>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LessonModal;
