import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Button from '@mui/material-next/Button';

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
import { color } from '@mui/system';

import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';






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
    if ( course.userToAdd&& course.permission === 'private') {
      const existingUser = await checkUserExistence(course.userToAdd);

      if (existingUser) {
        setCourse((prevCourse) => ({
          ...prevCourse,
          invitations: [...prevCourse.invitations, existingUser],
          userToAdd: '',
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
        boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'rgba(255, 255, 255, 0.578)',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '2%', color: 'rgb(174, 124, 61)', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
        <AddIcon fontSize="large" sx={{ marginRight: '10px', color: 'rgb(174, 124, 61)' }} />
        Add Course
      </Typography>
      <TextField
        label="Course Name"
        variant="outlined"
        onChange={(e) => handleChange('courseName', e.target.value)}
        // sx={{ marginBottom: '20px', width: '300px'  }}
        sx={{
          marginBottom: '20px',
          width: '300px',
          // borderColor: 'rgb(174, 124, 61)',
          // border: '1px solid rgb(174, 124, 61)',
          borderRadius: '4px',
          '&:focus': {
            borderColor: 'rgb(174, 124, 61)',
          },
          '& label.Mui-focused': {
            color: 'rgb(174, 124, 61)',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgb(174, 124, 61)',
            },
            '&:hover fieldset': {
              borderColor: 'rgb(174, 124, 61)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(174, 124, 61)',
            },
          },
        }}
      />
      <TextField
        label="Description"
        variant="outlined"
        onChange={(e) => handleChange('description', e.target.value)}
        sx={{
          marginBottom: '20px',
          width: '300px',
          borderRadius: '4px',
          '&:focus': {
            borderColor: 'rgb(174, 124, 61)',
          },
          '& label.Mui-focused': {
            color: 'rgb(174, 124, 61)',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgb(174, 124, 61)',
            },
            '&:hover fieldset': {
              borderColor: 'rgb(174, 124, 61)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(174, 124, 61)',
            },
          },
        }}
      />


      <FormControl variant="outlined" sx={{
        marginBottom: '20px', width: '300px', borderRadius: '4px',
        '&:focus': {
          borderColor: 'rgb(174, 124, 61)',
        },
        '& label.Mui-focused': {
          color: 'rgb(174, 124, 61)',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgb(174, 124, 61)',
          },
          '&:hover fieldset': {
            borderColor: 'rgb(174, 124, 61)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgb(174, 124, 61)',
          },
        },
      }}>
        <InputLabel>The type of the course</InputLabel>
        <Select
          value={course.typeCourse}
          onChange={(e) => handleChange('typeCourse', e.target.value)}
          label="The type of the course"
          sx={{ color: 'rgb(109, 106, 106)' }}
          inputProps={{
            startAdornment: (
              <>
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
      <FormControl variant="outlined" sx={{
        marginBottom: '20px', width: '300px', borderRadius: '4px',
        '&:focus': {
          borderColor: 'rgb(174, 124, 61)',
        },
        '& label.Mui-focused': {
          color: 'rgb(174, 124, 61)',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgb(174, 124, 61)',
          },
          '&:hover fieldset': {
            borderColor: 'rgb(174, 124, 61)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgb(174, 124, 61)',
          },
        },
      }}>
        <InputLabel>Permission to access the course</InputLabel>
        <Select
          value={course.permission}
          onChange={(e) => handlePermissionChange(e.target.value)}
          label="Permission to access the course"
          sx={{ color: 'rgb(109, 106, 106)' }}
          inputProps={{
            startAdornment: (
              <>
                <MailOutlineIcon sx={{ color: 'rgba(0, 0, 0, 0.712)' }} />
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
          <FormControl variant="outlined" sx={{
            marginBottom: '20px', width: '300px',
            borderRadius: '4px',
            '&:focus': {
              borderColor: 'rgb(174, 124, 61)',
            },
            '& label.Mui-focused': {
              color: 'rgb(174, 124, 61)',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgb(174, 124, 61)',
              },
              '&:hover fieldset': {
                borderColor: 'rgb(174, 124, 61)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgb(174, 124, 61)',
              },
            },
          }}>
            <InputLabel>Do you invite users?</InputLabel>
            <Select
              value={course.inviteUsers}
              onChange={(e) => handleChange('inviteUsers', e.target.value)}
              label="Do you invite users?"
              sx={{ color: 'rgb(109, 106, 106)' }}
              inputProps={{
                startAdornment: (
                  <AddIcon sx={{ color: 'rgb(109, 106, 106)' }} />
                ),
              }}
            >
              <MenuItem value={false}>
                <CloseIcon sx={{ marginRight: '5px', color: 'rgb(109, 106, 106)' }} />
                No
              </MenuItem>
              <MenuItem value={true}>
                <AddIcon sx={{ marginRight: '5px', color: 'rgb(109, 106, 106)' }} />
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
                  <Typography sx={{ color: 'rgb(109, 106, 106)' }}>
                    {user}
                  </Typography>
                  <IconButton
                    aria-label="remove"
                    size="small"
                    onClick={() => handleRemoveUser(index)}
                    // sx={{ marginLeft: 'auto', color: 'red' }}
                    sx={{
                      // marginBottom: '20px',
                      // width: '300px',
                      // borderColor: 'rgb(174, 124, 61)',
                      // border: '1px solid rgb(174, 124, 61)',
                      marginLeft: 'auto',
                      borderRadius: '4px',
                      '&:focus': {
                        borderColor: 'rgb(174, 124, 61)',
                      },
                      '& label.Mui-focused': {
                        color: 'rgb(174, 124, 61)',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgb(174, 124, 61)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgb(174, 124, 61)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'rgb(174, 124, 61)',
                        },
                      },
                    }}
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
                // sx={{ marginBottom: '20px', width: '300px' }}
                sx={{
                  marginBottom: '20px',
                  width: '300px',
                  // borderColor: 'rgb(174, 124, 61)',
                  // border: '1px solid rgb(174, 124, 61)',
                  borderRadius: '4px',
                  '&:focus': {
                    borderColor: 'rgb(174, 124, 61)',
                  },
                  '& label.Mui-focused': {
                    color: 'rgb(174, 124, 61)',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgb(174, 124, 61)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgb(174, 124, 61)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgb(174, 124, 61)',
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <MailOutlineIcon sx={{ color: 'rgb(109, 106, 106)' }} />
                  ),
                }}
              />
              <Button
                variant="contained"
                onClick={handleAddUser}
                // sx={{ backgroundColor: 'rgb(174, 124, 61)', color: 'white', marginBottom: '20px' }}
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
                startIcon={<AccessibilityNewIcon /> }

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
        // sx={{ backgroundColor: 'rgb(174, 124, 61)', color: 'white' }}
        sx={{
          backgroundColor: 'rgb(174, 124, 61)',
          color: 'white',
          marginBottom: '20px',
          '&:hover': {
            // backgroundColor: 'black ',
            backgroundColor: 'rgba(255, 255, 255, 0.178)',
            color: 'rgb(174, 124, 61)',
            borderColor: 'rgb(174, 124, 61)',
          },
        }}
         startIcon={<LaptopChromebookIcon />}
      >
        Add course
      </Button>
    </Box>

  );
};

export default AddCourse;

