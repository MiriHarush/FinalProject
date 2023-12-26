// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Typography from '@mui/material/Typography';
// import AddIcon from '@mui/icons-material/Add';
// import PeopleIcon from '@mui/icons-material/People';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

// const AddCourse = ({ spaceId }) => {
//   const [course, setCourse] = useState({
//     name: '',
//     type: '',
//     permission: '',
//     inviteUsers: false,
//     usersToAdd: [],
//     userToAdd: '', // מייל של משתמש להזמנה
//   });

//   const [animated, setAnimated] = useState(false);

//   const handleAddCourse = () => {
//     setAnimated(true);
//     console.log('Adding course to space:', spaceId, course);
//   };

//   const handleChange = (field, value) => {
//     setCourse((prevCourse) => ({ ...prevCourse, [field]: value }));
//   };

//   const handleAddUser = () => {
//     if (course.userToAdd && course.permission === 'פרטי') {
//       // כאן תוכלי לבצע בדיקה אם המשתמש כבר קיים במערכת או להוסיף אותו ל-course.usersToAdd
//       // לדוג', יש לבצע בדיקה של קיומו במערכת ואז להוסיף אותו ל-course.usersToAdd
//       // או לקבל אותו מה-DB ולהוסיף אותו ל-course.usersToAdd
//       const newUser = course.userToAdd;
//       setCourse((prevCourse) => ({
//         ...prevCourse,
//         usersToAdd: [...prevCourse.usersToAdd, newUser],
//         userToAdd: '', // אפס את המייל לאחר הוספה
//       }));
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginTop: '30px',
//         fontFamily: 'Arial, sans-serif',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#FFF',
//       }}
//     >
//       <Typography variant="h4" sx={{ marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center' }}>
//         <AddIcon fontSize="large" sx={{ marginRight: '10px', color: '#FF4081' }} />
//         הוספת קורס
//       </Typography>
//       <TextField
//         label="שם קורס"
//         variant="outlined"
//         value={course.name}
//         onChange={(e) => handleChange('name', e.target.value)}
//         sx={{ marginBottom: '20px', width: '300px' }}
//         InputProps={{
//           startAdornment: (
//             <AccessibilityNewIcon sx={{ color: '#FF4081' }} />
//           ),
//         }}
//       />
//       <FormControl variant="outlined" sx={{ marginBottom: '20px', width: '300px' }}>
//         <InputLabel>אופי הקורס</InputLabel>
//         <Select
//           value={course.type}
//           onChange={(e) => handleChange('type', e.target.value)}
//           label="אופי הקורס"
//           sx={{ color: '#2196F3' }}
//           inputProps={{
//             startAdornment: (
//               <PeopleIcon sx={{ color: '#2196F3' }} />
//             ),
//           }}
//         >
//           <MenuItem value="חוויתי">חוויתי</MenuItem>
//           <MenuItem value="לימודי">לימודי</MenuItem>
//           <MenuItem value="העשרה">העשרה</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl variant="outlined" sx={{ marginBottom: '20px', width: '300px' }}>
//         <InputLabel>הרשאת גישה לקורס</InputLabel>
//         <Select
//           value={course.permission}
//           onChange={(e) => handleChange('permission', e.target.value)}
//           label="הרשאת גישה לקורס"
//           sx={{ color: '#4CAF50' }}
//           inputProps={{
//             startAdornment: (
//               <MailOutlineIcon sx={{ color: '#4CAF50' }} />
//             ),
//           }}
//         >
//           <MenuItem value="פרטי">פרטי</MenuItem>
//           <MenuItem value="ציבורי">ציבורי</MenuItem>
//         </Select>
//       </FormControl>
//       {course.permission === 'פרטי' && (
//         <>
//           {course.usersToAdd.map((user, index) => (
//             <Typography key={index} sx={{ color: '#2196F3', marginTop: '10px' }}>
//               {user}
//             </Typography>
//           ))}
//           <TextField
//             label="מייל משתמש להזמנה"
//             variant="outlined"
//             value={course.userToAdd}
//             onChange={(e) => handleChange('userToAdd', e.target.value)}
//             sx={{ marginBottom: '20px', width: '300px' }}
//             InputProps={{
//               startAdornment: (
//                 <MailOutlineIcon sx={{ color: '#2196F3' }} />
//               ),
//             }}
//           />
//           <Button
//             variant="contained"
//             onClick={handleAddUser}
//             sx={{ backgroundColor: '#2196F3', color: '#fff', marginBottom: '20px' }}
//           >
//             הוסף משתמש
//           </Button>
//         </>
//       )}
//       <Button
//         variant="contained"
//         onClick={handleAddCourse}
//         sx={{ backgroundColor: '#FF4081', color: '#fff', marginBottom: '20px' }}
//         startIcon={<AccessibilityNewIcon />}
//       >
//         הוסף קורס
//       </Button>
//     </Box>
//   );
// };

// export default AddCourse;

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
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from '@mui/icons-material/Lock';

// קריאת דמה לשרת, שנמצאת בהנחה שיש לך פונקציה כזו
const checkUserExistence = async (userEmail) => {
  // את פה יש לממש את בדיקת קיומו של המשתמש בשרת
  // לדוג', לעבור על רשימת המשתמשים בשרת ולבדוק האם יש משתמש עם המייל
  return new Promise((resolve) => {
    setTimeout(() => {
      // במקרה הזה, יש לך משתמש דמי שנכנס לתוך הפונקציה
      const fakeUser = {
        email: userEmail,
        name: 'John Doe',
      };
      resolve(fakeUser);
    }, 1000);
  });
};

const AddCourse = ({ spaceId }) => {
  const [course, setCourse] = useState({
    name: '',
    type: '',
    permission: '',
    inviteUsers: false,
    usersToAdd: [],
    userToAdd: '', // מייל של משתמש להזמנה
  });

  const [animated, setAnimated] = useState(false);

  const handleAddCourse = async () => {
    setAnimated(true);
    console.log('Adding course to space:', spaceId, course);

    // כאשר לוחצים על "הוסף קורס", כאן אפשר להוסיף לוגיקה נוספת לשמירה בבסיס הנתונים
  };

  const handleChange = (field, value) => {
    setCourse((prevCourse) => ({ ...prevCourse, [field]: value }));
  };

  const handleAddUser = async () => {
    if (course.userToAdd && course.permission === 'פרטי') {
      // בודקים אם המשתמש קיים בשרת
      const existingUser = await checkUserExistence(course.userToAdd);

      if (existingUser) {
        // המשתמש קיים - נוסיף אותו לרשימת המשתמשים
        setCourse((prevCourse) => ({
          ...prevCourse,
          usersToAdd: [...prevCourse.usersToAdd, existingUser],
          userToAdd: '', // אפס את המייל לאחר הוספה
        }));
      } else {
        // המשתמש לא קיים - כאן נוכל להוסיף לוגיקה נוספת או להציג הודעה למשתמש
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
        value={course.name}
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
          value={course.type}
          onChange={(e) => handleChange('type', e.target.value)}
          label="אופי הקורס"
          sx={{ color: '#2196F3' }}
          inputProps={{
            startAdornment: (
              <>
                <PeopleIcon sx={{ color: '#2196F3' }} />
                {course.type === 'חוויתי' && <BusinessIcon sx={{ marginLeft: '5px' }} />}
                {course.type === 'לימודי' && <PublicIcon sx={{ marginLeft: '5px' }} />}
                {course.type === 'העשרה' && <LockIcon sx={{ marginLeft: '5px' }} />}
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
          onChange={(e) => handleChange('permission', e.target.value)}
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
                {user.name} ({user.email})
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




