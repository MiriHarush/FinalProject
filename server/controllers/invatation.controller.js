
const { Invite } = require("../model/invatations.model");


exports.updateInvite = async(req, res, next) => {
    const {idInvite} = req.params;
    const {newStatus} = req.body;

    try {
        const updatedInvite = await Invite.findByIdAndUpdate(
            idInvite,
            { $set: { statusInvite: newStatus } },
            { new: true }
        );

        if (!updatedInvite) {
            return res.status(404).json({ error: 'Invitation not found' });
        }

        return res.json(updatedInvite);
    } catch (error) {
       next(error)
    }
}

exports.getUserInvitationsByEmail = async (req, res, next) => {

    const { userEmail } = req.params
    console.log(userEmail);
    try {
        // מצא את כל ההזמנות במסד הנתונים ששייכות למייל מסוים
        // const userInvitations = await Invite.find({ acceptMail: userEmail });
        const userInvitations = await Invite.find({ acceptMail: userEmail, statusInvite: 'waiting' });

        console.log(userInvitations);

        // return userInvitations;
        res.send(userInvitations);
    } catch (error) {
        // throw new Error(s`Failed to get user invitations: ${error}`);
        next(error)
    }
}















