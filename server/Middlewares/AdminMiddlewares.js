const User = require("../models/AdminModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, "priyanka vts", async (err, decodedToken) => {
            if (err) {
                res.json({ status: false });
                return;
                // next();
            } else {
                const user = await User.findById(decodedToken.id);
                if (user) res.json({ status: true, user: user.email });
                else res.json({ status: false });
                return;
                // next();
            }
        })
    }
    else {
        res.json({ status: false });
        return;
        // next();
    }
}