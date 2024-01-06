import React, { useState, useContext, useEffect } from 'react';
import { InvitationContext } from '../context/invitations.context';
import InvitationModal from './InvitationModal';

const Invitations = () => {
    const { currentInvitation, getAllMyInvitations, updateInviteStatus } = useContext(InvitationContext);
    const [invitations, setInvitations] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const invitatiosData = await getAllMyInvitations();
            setInvitations(invitatiosData.result);
        }
        fetchData();
    }, [])


    return (
        <>
            {invitations.map((invite) => {
                <InvitationModal {...invite} />
            })}
        </>
    )
}

export default Invitations;