const bcrypt = require("bcryptjs");
const { User } = require("../model/user.model");
const { generateToken } = require("../utils/jwt");
const { validCreateUser, validLogIn } = require("../validation/user.validation");

const { mail, sendSMS } = require("./sendMessage");

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

        if (contact && allowedContact.includes(contact)) {
            body.contact = contact;
        }



        const hash = await bcrypt.hash(body.password, 10);
        body.password = hash;
        const newUser = await User.create(body);
        if (!newUser) return next(new Error('problem creating user'))
       
        
        try {
             await mail(newUser.email);
            // await sendSMS(newUser.phone);
            // console.log('SMS sent successfully.');
        } catch (err) {
            // console.error('Error sending SMS:', err);
            return next(err);
        }
        const user = { password:'********'}
      return  res.status(201).json({
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
