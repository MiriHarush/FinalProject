import React, { useState, useContext, useEffect } from 'react';
import { InvitationContext } from '../context/invitations.context';
import InvitationModal from './InvitationModal';
import { UserContext } from '../context/users.context';
import { Grid } from '@mui/material';


const Invitations = () => {
    const { currentUser } = useContext(UserContext);
    const { currentInvitation, getAllMyInvitations, updateInviteStatus } = useContext(InvitationContext);
    const [invitations, setInvitations] = useState([]);
    const [confirmOrder, setConfirmOrder] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const invitationsData = await getAllMyInvitations(currentUser.email);
            setInvitations(invitationsData.result);
        }
        fetchData();
    }, [confirmOrder])



    return (
        <Grid className='courseContainer'>
            {invitations.map((invite) => {
                return <InvitationModal invite={invite} onConfirmOrder={() => setConfirmOrder(true)} />
            })}
        </Grid>
    )
}

export default Invitations;