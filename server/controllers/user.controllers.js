
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // Add this line
const { User } = require("../model/user.model");
const { generateToken } = require("../utils/jwt");
const { validCreateUser, validLogIn } = require("../validation/user.validation");
const { createUserMail, sendSMS } = require("./sendMessage");
const { forgotPasswordEmail } = require("./sendMessage");
const { Invite } = require("../model/invatations.model");
const cloudinary = require("../utils/cloudinary");
const { Types } = require("mongoose");

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        next(error)
    }
}

exports.getInfoUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userInfo = await User.findOne({ _id: id });
        // getUserInvitationsByEmail(userInfo.email)
        res.send(userInfo);
    } catch (error) {
        next(error)
    }
}

exports.createUser = async (req, res, next) => {
    const body = req.body;
    console.log(body);
    try {
        console.log("JOI");
        const validate = validCreateUser(body)
        if (validate.error)
            throw Error(validate.error);
        if (await checkIfUserExsist(body.email)) {
            throw new Error("This email alredy in this system")
        }

        const { contact } = body;
        const allowedContact = ['Email', 'SMS', 'Phone'];

        const file = req.file.path
        const result = await cloudinary.uploader.upload(file, { resource_type: "image" })
        body.profileImage = result.url ;


        if (contact && allowedContact.includes(contact)) {
            body.contact = contact;
        }

        const hash = await bcrypt.hash(body.password, 10);
        body.password = hash;
        const newUser = await User.create(body);
        if (!newUser) return next(new Error('problem creating user'))


        try {
            await createUserMail(newUser.email);
            // await sendSMS(newUser.phone);
            // console.log('SMS sent successfully.');
        } catch (err) {
            // console.error('Error sending SMS:', err);
            return next(err);
        }
        const user = { password: '********' }
        return res.status(201).json({
            status: 'sucsess',
            user
        }
        );
    }
    catch (err) {
        console.log(err);
        next(err);
    }
}

const checkIfUserExsist = async (email) => {
    const user = await User.findOne({ email })
    if (user)
        return true;
    return false;
}


exports.login = async (req, res, next) => {
    try {
        const body = req.body;
        const validate = validLogIn(body)
        if (validate.error)
            throw Error(validate.error);
        if (!await checkIfUserExsist(body.email))
            throw new Error("This email is't in the system");
        const user = await User.findOne({ email: body.email })
        if (!await bcrypt.compare(body.password, user.password))
            throw new Error("password is incorrect");

        // res.status(200).send(user)
        const token = generateToken({ email: user.email, name: user.name, id: user._id, userName: user.userName });
        return res.send({ user, token })
    }
    catch (err) {
        next(err);
    }
}

exports.getUserSpaces = async (req, res, next) => {
    try {

        const userId = res.locals.user_id;
        console.log(userId);

        const user = await User.findById(userId);
        const spaces = user.spaces;

        return res.status(200).send(spaces);
    } catch (error) {
        next(error)
    }
}

exports.patchUser = async (req, res, next) => {
    const id = req.params.idEdit;
    const userId = res.locals.user_id;
    const data = req.body;

    try {
        if (userId !== id) {
            throw new Error("you are not the auther")
        }
        const patchUser = await User.findByIdAndUpdate(userId, data, { new: true });
        res.send(patchUser)
    } catch (error) {
        next(error)
    }
}


exports.updateLoginMethod = (req, res) => {
    const { contact } = req.body;
    const user = User.findByIdAndUpdate(
        req.user._id,
        { $set: { contact } },
        { new: true }
    );
    res.json({ message: 'Login method updated successfully.' });
}



exports.resetPassword = async (req, res, next) => {
    try {
        const { resetToken } = req.query;
        const { newPassword } = req.body;

        console.log("resetToken" + resetToken);
        // Decode and verify the reset token
        const decodedToken = jwt.verify(resetToken, "123@@");
        console.log(decodedToken);
        const userId = decodedToken.userId;

        // Find the user in the database
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        console.log(user.resetToken);

        // Check if the token matches the user's reset token
        if (user.resetToken !== resetToken) {
            throw new Error("Invalid reset token");
        }

        // Validate and hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password in the database
        user.password = hashedPassword;
        user.resetToken = undefined; // Clear the reset token
        await user.save();

        res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
        next(error);
    }
};

exports.forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        // Check if the user exists
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            throw new Error("User not found");
        }

        // Generate a reset token
        const resetToken = jwt.sign({ userId: user._id }, "123@@", {
            expiresIn: "1h",
        });

        // Save the reset token in the database
        user.resetToken = resetToken;
        console.log(user.resetToken);
        await user.save();

        // Send the reset password email
        await forgotPasswordEmail(user.email, resetToken);

        res.status(200).json({ message: "Reset password email sent successfully" });
    } catch (error) {
        next(error);
    }
};

