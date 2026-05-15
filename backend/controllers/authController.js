const User = require("../models/User.js");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");



const signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.json({
                message: "User Already Exists"
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({

            name,
            email,
            password: hashedPassword

        });

        const token = jwt.sign(

            { id: user._id },

            "mysecretkey",

            { expiresIn: "7d" }

        );

        res.cookie("token", token);

        res.json({
            message: "Signup Successful",
            user,
            token
        });

    } catch (error) {

        res.json({
            message: error.message
        });

    }

};



const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const loginUser = await User.findOne({ email });

        if (!loginUser) {

            return res.json({
                message: "User Not Found"
            });

        }

        const isMatch = await bcrypt.compare(
            password,
            loginUser.password
        );

        if (!isMatch) {

            return res.json({
                message: "Invalid Password"
            });

        }

        const token = jwt.sign(

            { id: loginUser._id },

            "mysecretkey",

            { expiresIn: "7d" }

        );

        res.cookie("token", token);

        res.json({
            message: "Login Successful",
            loginUser,
            token
        });

    } catch (error) {

        res.json({
            message: error.message
        });

    }

};



const logout = async (req, res) => {

    try {

        res.clearCookie("token");

        res.json({
            message: "Logout Successful"
        });

    } catch (error) {

        res.json({
            message: error.message
        });

    }

};



const profile = async (req, res) => {

    try {

        const user = await User.findById(req.userId);

        res.json({
            message: "Profile Fetched",
            user
        });

    } catch (error) {

        res.json({
            message: error.message
        });

    }

};



module.exports = {
    signup,
    login,
    logout,
};