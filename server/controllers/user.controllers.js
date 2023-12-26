const bcrypt = require("bcryptjs");
const { User } = require("../model/user.model");
const { generateToken } = require("../utils/jwt");
const { validCreateUser, validLogIn } = require("../validation/user.validation");

exports.createUser = async (req, res, next) => {
    const body = req.body;
    try {
        const validate = validCreateUser(body)
        if (validate.error)
            throw Error(validate.error);

        if (await checkIfUserExsist(body.email)) {
            throw new Error("This email alredy in this system")
        }

        const hash = await bcrypt.hash(body.password, 10);
        body.password = hash;
        const newUser = new User(body);
        newUser.id = newUser._id;
        await newUser.save()
        newUser.password="******"
        return res.status(201).send(newUser);
    }
    catch (err) {
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
        const token = generateToken(user);
        return res.send({ user, token })
    }
    catch (err) {
        next(err);
    }
}

exports.getUserSpaces = async (req, res, next) => {
    try {
        console.log(req);
        const userId = req.user._id; 

        const user = await User.findById(userId);
        const spaces = user.spaces;

        return res.status(200).send(spaces);
    } catch (error) {
        next(error)
    }
}

