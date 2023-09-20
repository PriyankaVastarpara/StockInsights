const AdminModel = require("../models/AdminModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "priyanka vts", {
        expiresIn: maxAge,
    });
}


const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    if (err.message === "Incorrect Email") errors.email = "This email is not registered";

    if (err.message === "Incorrect Password") errors.email = "Password is incorrect";

    if (err.code === 11000) {
        errors.email = "Email is already registered";
        return errors;
    }
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;
};

// module.exports.register = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         const user = await AdminModel.create({ email, password });
//         res.status(201).json({ user: user._id, created: true });
//     }
//     catch (err) {
//         console.log(err);
//         const errors = handleErrors(err);
//         res.json({ errors, created: false });
//     }
// };

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const admin = await AdminModel.login(email, password );
        const token = createToken(admin._id);
        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge * 1000,
        });
        res.status(200).json({ admin: admin._id, created: true });
    }
    catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
    }
};
