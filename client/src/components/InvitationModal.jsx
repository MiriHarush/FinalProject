import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';


const StyledCard = styled(Card)({
    margin: '10px',
    maxWidth: '250px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    display: 'flex',  // הוסף תכונת Flex
    flexDirection: 'column',  // כדי שהכפתורים יורדו לקרקע
});

const StyledSeal = styled('div')({
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderTop: '25px solid #fff',
    borderLeft: '25px solid transparent',
    borderRight: '25px solid transparent',
    zIndex: '-1',
});

const StyledStamp = styled('div')({
    position: 'absolute',
    top: '5px',
    right: '5px',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
});

const InvitationModal = ({ invite }) => {
    const { instructorName, courseName } = invite;

    const orderConfirmation = () => {
        // הוסף פעולות כאן אם יש צורך
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <StyledCard>
                <StyledStamp>✉️</StyledStamp>
                <StyledSeal />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {`Invitation from ${instructorName}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {`To Course: ${courseName}`}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ margin: '10px' }}
                    >
                        Accept
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={orderConfirmation}
                    >
                        Reject
                    </Button>
                </CardContent>
            </StyledCard>
        </Grid>
    );
};

export default InvitationModal;
