import User from "../models/User.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

dotenv.config();

export const registerUser = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(200).send("User has been created successfully.");
    } catch (err) {
        next(err);
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return next(createError(404, "User not found."));
        }

        const isPasswordValid = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordValid) {
            return next(createError(400, "Username or Password is incorrect."));
        }

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRETKEY
        );

        const { password, isAdmin, ...userDetails } = user._doc;
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200).json({ ...userDetails });
    } catch (err) {
        next(err);
    }
}
