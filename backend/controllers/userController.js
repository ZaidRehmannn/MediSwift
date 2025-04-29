import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

// login user
const loginUser = async (req, res) => {
    const { loginIdentifier, password } = req.body;

    try {
        const user = await userModel.findOne({
            $or: [{ email: loginIdentifier }, { username: loginIdentifier }],
        });
        if (!user) {
            return res.status(404).json({ success: false, message: "User doesn't exist!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid Password!" });
        }

        const token = createToken(user._id);
        res.status(200).json({ success: true, token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
};

// register user
const registerUser = async (req, res) => {
    const { firstName, lastName, username, email, password, phoneNo } = req.body;

    try {
        const exists = await userModel.findOne({
            $or: [{ email: email }, { username: username }, { phoneNo: phoneNo }],
        });

        if (exists) {
            if (exists.email === email) {
                return res.status(400).json({ success: false, message: "Email is already in use!" });
            }
            else if (exists.username === username) {
                return res.status(400).json({ success: false, message: "Username is already taken!" });
            }
            else if (exists.phoneNo === phoneNo) {
                return res.status(400).json({ success: false, message: "Phone number already in use!" });
            }
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email!" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long!" });
        }
        if (!/\d/.test(password)) {
            return res.status(400).json({ success: false, message: "Password must contain at least one digit!" });
        }

        if (!/^\d+$/.test(phoneNo)) {
            return res.status(400).json({ success: false, message: "Phone number must contain only digits!" });
        }
        if (phoneNo[0] !== '0') {
            return res.status(400).json({ success: false, message: "Phone number must start with 0!" });
        }
        if (phoneNo.length !== 11) {
            return res.status(400).json({ success: false, message: "Please enter a valid phone number!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: hashedPassword,
            phoneNo: phoneNo
        });

        const user = await newUser.save(); // Added await here
        const token = createToken(user._id);
        res.status(201).json({ success: true, token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
};

// fetching user data
const userInfo = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.userId);
        res.status(200).json({ success: true, userData: user })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
}

export { loginUser, registerUser, userInfo };
