import React, { useState, useContext, useEffect } from 'react';
import { InvitationContext } from '../context/invitations.context';
import InvitationModal from './InvitationModal';
import { UserContext } from '../context/users.context';


const Invitations = () => {
const {currentUser} = useContext(UserContext);
    const { currentInvitation, getAllMyInvitations, updateInviteStatus } = useContext(InvitationContext);
    const [invitations, setInvitations] = useState([]);
const [confirmOrder, setConfirmOrder] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const invitatiosData = await getAllMyInvitations(currentUser.email);
            setInvitations(invitatiosData.result);
        }
        fetchData();
    }, [confirmOrder])

    

    return (
        <>
            {invitations.map((invite) => {
              return <InvitationModal invite={invite} onConfirmOrder = {()=> setConfirmOrder(true)}/>
            })}
        </>
    )
}

export default Invitations;