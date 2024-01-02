import React, { useContext, useState } from 'react';
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
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from '@mui/icons-material/Lock';
import { CourseContext } from '../context/courses.context';
import { UserContext } from '../context/users.context';

const checkUserExistence = async (userEmail) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeUser = {
        email: userEmail,
        name: 'John Doe',
      };
      resolve(fakeUser);
    }, 1000);
  });
};

const AddCourse = ({ spaceId }) => {
  // const [course, setCourse] = useState({
  //   courseName: '',
  //   typeCourse: '',
  //   permission: '',
  //   inviteUsers: false,
  //   usersToAdd: [],
  //   userToAdd: '',
  // });
  const { addCourse } = useContext(CourseContext);
  const { currentUser } = useContext(UserContext);


  const [course, setCourse] = useState({
    courseName: '',
    typeCourse: '',
    permission: '',
    lessons: [],
    description: '',
    ownerCourse: spaceId,
    ownerUser: currentUser.email
  });

  // inviteUsers: false,
  // usersToAdd: [],
  // userToAdd: '',

  //lessons description ownerCourse-(space) ownerUser


  const handleAddCourse = async () => {
    console.log('Adding course to space:', spaceId, course);
    // Additional logic for saving to the database can be added here
    addCourse(course);
  };

  const handleChange = (field, value) => {
    setCourse((prevCourse) => ({ ...prevCourse, [field]: value }));
  };

  const handleAddUser = async () => {
    if (course.userToAdd && course.permission === 'פרטי') {
      const existingUser = await checkUserExistence(course.userToAdd);

      if (existingUser) {
        setCourse((prevCourse) => ({
          ...prevCourse,
          usersToAdd: [...prevCourse.usersToAdd, existingUser],
          userToAdd: '',
        }));
      } else {
        console.log('User does not exist');
      }
    }
  };

  const handleRemoveUser = (index) => {
    const newUsers = [...course.usersToAdd];
    newUsers.splice(index, 1);
    setCourse((prevCourse) => ({
      ...prevCourse,
      usersToAdd: newUsers,
    }));
  };

  const handlePermissionChange = (value) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      permission: value,
      inviteUsers: false,
      usersToAdd: [],
      userToAdd: '',
    }));
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
        backgroundColor: '#FFF',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center' }}>
        <AddIcon fontSize="large" sx={{ marginRight: '10px', color: '#FF4081' }} />
        הוספת קורס
      </Typography>
      <TextField
        label="שם קורס"
        variant="outlined"
        value={course.courseName}
        onChange={(e) => handleChange('name', e.target.value)}
        sx={{ marginBottom: '20px', width: '300px' }}
        InputProps={{
          startAdornment: (
            <AccessibilityNewIcon sx={{ color: '#FF4081' }} />
          ),
        }}
      />
      <FormControl variant="outlined" sx={{ marginBottom: '20px', width: '300px' }}>
        <InputLabel>אופי הקורס</InputLabel>
        <Select
          value={course.typeCourse}
          onChange={(e) => handleChange('type', e.target.value)}
          label="אופי הקורס"
          sx={{ color: '#2196F3' }}
          inputProps={{
            startAdornment: (
              <>
                <PeopleIcon sx={{ color: '#2196F3' }} />
                {course.typeCourse === 'חוויתי' && <BusinessIcon sx={{ marginLeft: '5px' }} />}
                {course.typeCourse === 'לימודי' && <PublicIcon sx={{ marginLeft: '5px' }} />}
                {course.typeCourse === 'העשרה' && <LockIcon sx={{ marginLeft: '5px' }} />}
              </>
            ),
          }}
        >
          <MenuItem value="חוויתי">
            <BusinessIcon sx={{ marginRight: '5px' }} />
            חוויתי
          </MenuItem>
          <MenuItem value="לימודי">
            <PublicIcon sx={{ marginRight: '5px' }} />
            לימודי
          </MenuItem>
          <MenuItem value="העשרה">
            <LockIcon sx={{ marginRight: '5px' }} />
            העשרה
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ marginBottom: '20px', width: '300px' }}>
        <InputLabel>הרשאת גישה לקורס</InputLabel>
        <Select
          value={course.permission}
          onChange={(e) => handlePermissionChange(e.target.value)}
          label="הרשאת גישה לקורס"
          sx={{ color: '#4CAF50' }}
          inputProps={{
            startAdornment: (
              <>
                <MailOutlineIcon sx={{ color: '#4CAF50' }} />
                {course.permission === 'פרטי' && <LockIcon sx={{ marginLeft: '5px' }} />}
                {course.permission === 'ציבורי' && <PublicIcon sx={{ marginLeft: '5px' }} />}
              </>
            ),
          }}
        >
          <MenuItem value="פרטי">
            <LockIcon sx={{ marginRight: '5px' }} />
            פרטי
          </MenuItem>
          <MenuItem value="ציבורי">
            <PublicIcon sx={{ marginRight: '5px' }} />
            ציבורי
          </MenuItem>
        </Select>
      </FormControl>

      {course.permission === 'פרטי' && (
        <>
          <FormControl variant="outlined" sx={{ marginBottom: '20px', width: '300px' }}>
            <InputLabel>האם להזמין משתמשים?</InputLabel>
            <Select
              value={course.inviteUsers}
              onChange={(e) => handleChange('inviteUsers', e.target.value)}
              label="האם להזמין משתמשים?"
              sx={{ color: '#FF4081' }}
              inputProps={{
                startAdornment: (
                  <AddIcon sx={{ color: '#FF4081' }} />
                ),
              }}
            >
              <MenuItem value={false}>
                <CloseIcon sx={{ marginRight: '5px' }} />
                לא
              </MenuItem>
              <MenuItem value={true}>
                <AddIcon sx={{ marginRight: '5px' }} />
                כן
              </MenuItem>
            </Select>
          </FormControl>

          {course.inviteUsers && (
            <>
              {course.usersToAdd.map((user, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <Avatar sx={{ marginRight: '10px' }}>{user.name[0]}</Avatar>
                  <Typography sx={{ color: '#2196F3' }}>
                    {user.email}
                  </Typography>
                  <IconButton
                    aria-label="remove"
                    size="small"
                    onClick={() => handleRemoveUser(index)}
                    sx={{ marginLeft: 'auto', color: 'red' }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              ))}
              <TextField
                label="מייל משתמש להזמנה"
                variant="outlined"
                value={course.userToAdd}
                onChange={(e) => handleChange('userToAdd', e.target.value)}
                sx={{ marginBottom: '20px', width: '300px' }}
                InputProps={{
                  startAdornment: (
                    <MailOutlineIcon sx={{ color: '#2196F3' }} />
                  ),
                }}
              />
              <Button
                variant="contained"
                onClick={handleAddUser}
                sx={{ backgroundColor: '#2196F3', color: '#fff', marginBottom: '20px' }}
              >
                הוסף משתמש
              </Button>
            </>
          )}
        </>
      )}

      <Button
        variant="contained"
        onClick={handleAddCourse}
        sx={{ backgroundColor: '#FF4081', color: '#fff' }}
        startIcon={<AccessibilityNewIcon />}
      >
        הוסף קורס
      </Button>
    </Box>
  );
};

export default AddCourse;

