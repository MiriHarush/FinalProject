import React, { useState, useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Button from '@mui/material-next/Button';
import LessonModal from '../components/LessonModal'; // Import the LessonModal component
import { CourseContext } from '../context/courses.context';
import { LessonContext } from '../context/lessons.context';
import { InvitationContext } from '../context/invitations.context';
import { useNavigate } from 'react-router-dom';
import '../css/lesson.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';


const CourseManagerDashboard = () => {
  const { currentCourse, sentInvites } = useContext(CourseContext);
  const { updateCurrentLesson, getAllLessons, addLesson } = useContext(LessonContext);
  const { getAllMyInvitations } = useContext(InvitationContext);
  const [lessons, setLessons] = useState([]);
  const [invitations, setInvitations] = useState([]);


  const [addInviteUsers, setAddInviteUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState('');
  const [doYouWantInvite, setDoYouWantInvite] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const lessonsData = await getAllLessons(currentCourse._id);
      setLessons(lessonsData.result);

      const invitationsData = await getAllMyInvitations(currentCourse._id);
      setInvitations(invitationsData.result);
    }
    fetchData();

  }, [])

  // useEffect(() => {
  //   console.log("lessons", lessons);
  // }, [lessons])

  // useEffect(() => {
  //   console.log("invitations", invitations);
  // }, [invitations])

  const [newLesson, setNewLesson] = useState({ title: '', content: '' });
  const [lessonModalOpen, setLessonModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const addNewLesson = async () => {
    const lessonId = (lessons.length + 1).toString();

    const lesson = {
      lessonName: newLesson.title,
      descerption: newLesson.content,
      ownerLesson: currentCourse._id
    }
    const updatedLessons = [...lessons, { ...lesson, id: lessonId }];

    await addLesson(lesson);

    setLessons(() => ([
      ...updatedLessons,
    ]));
    console.log(lessons);
    setNewLesson({ title: '', content: '' });
  };

  const openLessonModal = (lesson) => {
    setSelectedLesson(lesson);
    setLessonModalOpen(true);
    updateCurrentLesson(lesson);

    navigate('/lessonModal', { state: { isManager: 'true' } });
  };

  const closeLessonModal = () => {
    setSelectedLesson(null);
    setLessonModalOpen(false);
  };

  const handleChange = (field, value) => {
    if (field === "inviteUsers") {
      setDoYouWantInvite(true)
    }
    if (field === "userToAdd") {
      setUserToAdd(value)
    }
  };



  const checkUserExistence = async (userEmail) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeUser =
          userEmail
        resolve(fakeUser);
      }, 1000);
    });
  };



  const handleAddUser = async () => {
    const existingUser = await checkUserExistence(userToAdd);
    console.log(existingUser);
    if (!currentCourse.invitations.includes(userToAdd)) {
  
    if (existingUser) {
      setAddInviteUsers([...addInviteUsers, existingUser]);
    } else {
      console.log('User does not exist');
    }
    handleChange('userToAdd', '');
  }
  else{
    handleChange('userToAdd', '');
  }
  };

  const handleRemoveUser = (index) => {
    const newUsers = [...addInviteUsers];
    newUsers.splice(index, 1);
    setAddInviteUsers(newUsers);
  };

  const handleSendInvites = async () => {
   const send =  await sentInvites(currentCourse._id, addInviteUsers);
   console.log(send);
   setDoYouWantInvite(false);
  };


  return (
    <div className='centerContainer'>

      <h2 style={{ color: 'rgba(174, 124, 61, 0.908)', fontWeight: 'bold' }}>Course Manager Dashboard</h2>
      <div className='words'>

        <h3 style={{color: 'rgb(174, 124, 61)'}}><span style={{ fontWeight: 'bold',  color: 'rgb(174, 124, 61)' }}>Course name: </span> {currentCourse.courseName}</h3>
        <h3 style={{color: 'rgb(174, 124, 61)'}}><span style={{ fontWeight: 'bold',  color: 'rgb(174, 124, 61)' }}>Course Type:  </span> {currentCourse.typeCourse}</h3>
        <h3 style={{color: 'rgb(174, 124, 61)'}}><span style={{ fontWeight: 'bold',  color: 'rgb(174, 124, 61)' }}>Description:  </span> {currentCourse.description}</h3>
        <h3 style={{color: 'rgb(174, 124, 61)'}}><span style={{ fontWeight: 'bold',  color: 'rgb(174, 124, 61)' }}>Permission:  </span> {currentCourse.permission}</h3>
        <h3 style={{color: 'rgb(174, 124, 61)', fontWeight: 'bold'}}>Lessons:</h3>
      </div>
      <div >
        {lessons?.map((lesson) => (
          <Card key={lesson.id} className='courseCard'>
            <CardContent style={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div">
                {lesson.lessonName}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {lesson.descerption}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => openLessonModal(lesson)}
                className='courseButton'
              >
                View Lesson
              </Button>
            </CardContent>
          </Card>
        ))}
        <Card className='courseCard'>
          <CardContent>
            <Typography variant="h6" component="div">
              New Lesson
            </Typography>
            <input
              type="text"
              placeholder="Lesson Name"
              value={newLesson.title}
              onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
              style={{ marginBottom: '10px', width: '100%' }}
            />
            <textarea
              placeholder="Lesson Description"
              value={newLesson.content}
              onChange={(e) => setNewLesson({ ...newLesson, content: e.target.value })}
              style={{ marginBottom: '10px', width: '100%' }}
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={addNewLesson}
              className='courseButton'
            >
              Add Lesson
            </Button>
          </CardContent>
        </Card>
      </div>
      {lessonModalOpen && (
        <LessonModal
          open={lessonModalOpen}
          onClose={closeLessonModal}
          lesson={selectedLesson}
        />
      )}

      {currentCourse.permission === 'private' && (
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
              value={doYouWantInvite}
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

          {doYouWantInvite && (
            <>
              {addInviteUsers.map((user, index) => (
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
                value={userToAdd}
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
                startIcon={<AccessibilityNewIcon />}

              >
                Add user
              </Button>
              <Button
                variant="contained"
                onClick={handleSendInvites}
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
                startIcon={<MailOutlineIcon />}

              >
                Send Invitations
              </Button>
            </>
          )}
        </>
      )}



    </div >
  )
}

export default CourseManagerDashboard;
