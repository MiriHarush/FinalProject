import React, { useState } from 'react';
import { Container, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';


const UserInvitations = () => {
  const [viewingLetters, setViewingLetters] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleViewLetters = () => {
    setViewingLetters(true);
  };

  const handleCloseLetters = () => {
    setViewingLetters(false);
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const pendingLetters = invitationsData.filter((letter) => letter.pendingApproval);

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Your Chat Invitations
      </Typography>
      <Button variant="contained" color="primary" onClick={handleViewLetters}>
        View Letters
      </Button>

      <Dialog open={viewingLetters} onClose={handleCloseLetters} maxWidth="md" fullWidth>
        <DialogTitle>Pending Letters</DialogTitle>
        <DialogContent>
          <List>
            {pendingLetters.map((letter) => (
              <ListItem key={letter.id} button onClick={() => handleLetterClick(letter)}>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={letter.sender} secondary={letter.message} />
              </ListItem>
            ))}
          </List>
          {selectedLetter && (
            <Dialog open={Boolean(selectedLetter)} onClose={() => setSelectedLetter(null)} fullWidth>
              <DialogTitle>Letter Details</DialogTitle>
              <DialogContent>
                <Typography variant="h6">{selectedLetter.sender}</Typography>
                <Typography>{selectedLetter.message}</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelectedLetter(null)} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLetters} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserInvitations;
