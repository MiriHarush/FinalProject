import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Zoom from '@mui/material/Zoom';

const AddCourse = () => {
  const [course, setCourse] = useState({
    name: '',
    type: '',
    permission: '',
    inviteUsers: false,
    userToAdd: '',
  });

  const [animated, setAnimated] = useState(false);

  const handleAddCourse = () => {
    setAnimated(true);
    // כאן תוכל להוסיף לוגיקה להוספת הקורס למערכת
    // וגם להוספת משתמשים אם inviteUsers הוא true
    console.log('Adding course:', course);
  };

  const handleChange = (field, value) => {
    setCourse((prevCourse) => ({ ...prevCourse, [field]: value }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#FFF', // רקע לבן
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center' }}>
        <AddIcon fontSize="large" sx={{ marginRight: '10px', color: '#FF4081' }} />
        הוספת קורס
      </Typography>
      <Zoom in={animated} timeout={500}>
        <TextField
          label="שם קורס"
          variant="outlined"
          value={course.name}
          onChange={(e) => handleChange('name', e.target.value)}
          sx={{ marginBottom: '20px', width: '300px' }}
          InputProps={{
            startAdornment: (
              <AccessibilityNewIcon sx={{ color: '#FF4081' }} />
            ),
          }}
        />
      </Zoom>
      <FormControl variant="outlined" sx={{ marginBottom: '20px', width: '300px' }}>
        <InputLabel>אופי הקורס</InputLabel>
        <Select
          value={course.type}
          onChange={(e) => handleChange('type', e.target.value)}
          label="אופי הקורס"
          sx={{ color: '#2196F3' }}
          inputProps={{
            startAdornment: (
              <PeopleIcon sx={{ color: '#2196F3' }} />
            ),
          }}
        >
          <MenuItem value="חוויתי">חוויתי</MenuItem>
          <MenuItem value="לימודי">לימודי</MenuItem>
          <MenuItem value="העשרה">העשרה</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ marginBottom: '20px', width: '300px' }}>
        <InputLabel>הרשאת גישה לקורס</InputLabel>
        <Select
          value={course.permission}
          onChange={(e) => handleChange('permission', e.target.value)}
          label="הרשאת גישה לקורס"
          sx={{ color: '#4CAF50' }}
          inputProps={{
            startAdornment: (
              <MailOutlineIcon sx={{ color: '#4CAF50' }} />
            ),
          }}
        >
          <MenuItem value="פרטי">פרטי</MenuItem>
          <MenuItem value="ציבורי">ציבורי</MenuItem>
        </Select>
      </FormControl>
      {course.permission === 'פרטי' && (
        <FormControl sx={{ marginBottom: '20px', width: '300px' }}>
          <InputLabel>הזמן משתמשים לקורס</InputLabel>
          <Select
            value={course.inviteUsers}
            onChange={(e) => handleChange('inviteUsers', e.target.value)}
            label="הזמן משתמשים לקורס"
            sx={{ color: '#FFA000' }}
            inputProps={{
              startAdornment: (
                <MailOutlineIcon sx={{ color: '#FFA000' }} />
              ),
            }}
          >
            <MenuItem value={true}>כן</MenuItem>
            <MenuItem value={false}>לא</MenuItem>
          </Select>
        </FormControl>
      )}
      {course.inviteUsers && (
        <TextField
          label="שם משתמש להזמנה"
          variant="outlined"
          value={course.userToAdd}
          onChange={(e) => handleChange('userToAdd', e.target.value)}
          sx={{ marginBottom: '20px', width: '300px' }}
          InputProps={{
            startAdornment: (
              <PeopleIcon sx={{ color: '#8BC34A' }} />
            ),
          }}
        />
      )}
      <Button
        variant="contained"
        onClick={handleAddCourse}
        sx={{ backgroundColor: '#FF4081', color: '#fff', marginBottom: '20px' }}
        startIcon={<AccessibilityNewIcon />} // אייקון של אדם
      >
        הוסף קורס
      </Button>
      {course.inviteUsers && (
        <Button
          variant="contained"
          sx={{ backgroundColor: '#81C784', color: '#fff', width: '300px' }}
          startIcon={<PeopleIcon />} // אייקון של קבוצה
        >
          הזמן משתמשים
        </Button>
      )}
      {course.inviteUsers && (
        <Button
          variant="contained"
          sx={{ backgroundColor: '#4CAF50', color: '#fff', width: '300px', marginTop: '20px' }}
          startIcon={<MailOutlineIcon />} // אייקון של מייל
        >
          שלח מייל
        </Button>
      )}
    </Box>
  );
};

export default AddCourse;
