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
import { SpaceContext } from '../context/spaces.context';


const checkUserExistence = async (userEmail) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeUser = 
         userEmail
      resolve(fakeUser);
    }, 1000);
  });
};

const AddCourse = ({ onClose }) => {
  const { currentSpace } = useContext(SpaceContext);
  const { addCourse } = useContext(CourseContext);
  const { currentUser } = useContext(UserContext);


  const [course, setCourse] = useState({
    courseName: '',
    typeCourse: '',
    permission: '',
    lessons: [],
    description: '',
    ownerCourse: currentSpace._id,
    invitations: []
  });



  const handleAddCourse = async () => {
    await addCourse(course);
    onClose()
  };

  const handleChange = (field, value) => {
    console.log("change");
    setCourse((prevCourse) => ({ ...prevCourse, [field]: value }));
  };

  const handleAddUser = async () => {
    console.log(course.userToAdd);
    if (course.userToAdd && course.permission === 'private') {
      const existingUser = await checkUserExistence(course.userToAdd);

      if (existingUser) {
        setCourse((prevCourse) => ({
          ...prevCourse,
          invitations: [...prevCourse.invitations, existingUser],
        }));
      } else {
        console.log('User does not exist');
      }
    }
  };

  const handleRemoveUser = (index) => {
    const newUsers = [...course.invitations];
    newUsers.splice(index, 1);
    setCourse((prevCourse) => ({
      ...prevCourse,
      invitations: newUsers,
    }));
  };

  const handlePermissionChange = (value) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      permission: value,
      invitations: []
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
        Add Course
      </Typography>
      <TextField
        label="Course Name"
        variant="outlined"
        // value={course.courseName}
        onChange={(e) => handleChange('courseName', e.target.value)}
        sx={{ marginBottom: '20px', width: '300px' }}
        InputProps={{
          startAdornment: (
            <AccessibilityNewIcon sx={{ color: '#FF4081' }} />
          ),
        }}
      />
      <FormControl variant="outlined" sx={{ marginBottom: '20px', width: '300px' }}>
        <InputLabel>The type of the course</InputLabel>
        <Select
          value={course.typeCourse}
          onChange={(e) => handleChange('typeCourse', e.target.value)}
          label="The type of the course"
          sx={{ color: '#2196F3' }}
          inputProps={{
            startAdornment: (
              <>
                <PeopleIcon sx={{ color: '#2196F3' }} />
                {course.typeCourse === 'experiential' && <BusinessIcon sx={{ marginLeft: '5px' }} />}
                {course.typeCourse === 'studies' && <PublicIcon sx={{ marginLeft: '5px' }} />}
                {course.typeCourse === 'enrichment' && <LockIcon sx={{ marginLeft: '5px' }} />}
              </>
            ),
          }}
        >
          <MenuItem value="experiential">
            <BusinessIcon sx={{ marginRight: '5px' }} />
            experiential
          </MenuItem>
          <MenuItem value="studies">
            <PublicIcon sx={{ marginRight: '5px' }} />
            studies
          </MenuItem>
          <MenuItem value="enrichment">
            <LockIcon sx={{ marginRight: '5px' }} />
            enrichment
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ marginBottom: '20px', width: '300px' }}>
        <InputLabel>Permission to access the course</InputLabel>
        <Select
          value={course.permission}
          onChange={(e) => handlePermissionChange(e.target.value)}
          label="Permission to access the course"
          sx={{ color: '#4CAF50' }}
          inputProps={{
            startAdornment: (
              <>
                <MailOutlineIcon sx={{ color: '#4CAF50' }} />
                {course.permission === 'private' && <LockIcon sx={{ marginLeft: '5px' }} />}
                {course.permission === 'public' && <PublicIcon sx={{ marginLeft: '5px' }} />}
              </>
            ),
          }}
        >
          <MenuItem value="private">
            <LockIcon sx={{ marginRight: '5px' }} />
            private
          </MenuItem>
          <MenuItem value="public">
            <PublicIcon sx={{ marginRight: '5px' }} />
            public
          </MenuItem>
        </Select>
      </FormControl>

      {course.permission === 'private' && (
        <>
          <FormControl variant="outlined" sx={{ marginBottom: '20px', width: '300px' }}>
            <InputLabel>Do you invite users?</InputLabel>
            <Select
              value={course.inviteUsers}
              onChange={(e) => handleChange('inviteUsers', e.target.value)}
              label="Do you invite users?"
              sx={{ color: '#FF4081' }}
              inputProps={{
                startAdornment: (
                  <AddIcon sx={{ color: '#FF4081' }} />
                ),
              }}
            >
              <MenuItem value={false}>
                <CloseIcon sx={{ marginRight: '5px' }} />
                No
              </MenuItem>
              <MenuItem value={true}>
                <AddIcon sx={{ marginRight: '5px' }} />
                Yes
              </MenuItem>
            </Select>
          </FormControl>

          {course.inviteUsers && (
            <>
              {course.invitations.map((user, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <Avatar sx={{ marginRight: '10px' }}>{user[0]}</Avatar>
                  <Typography sx={{ color: '#2196F3' }}>
                    {user}
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
                label="User email for ordering"
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
                Add user
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
        Add course
      </Button>
    </Box>
  );
};

export default AddCourse;

