const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerSchema, loginSchema } = require("../validations/user.validation");

const registerUser = async (req, res) => {
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { username, email, password } = value;

    if (!username || !email || !password){
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser){
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "User created successfully",
            user: { id: newUser._id, username: newUser.username, email: newUser.email }
        });
    } catch (err) {
        if (err && err.code === 11000) {
            return res.status(400).json({ message: "Email already in use" });
        }
        return res.status(500).json({ message: "Server error" });
    }
}

const loginUser = async (req, res) => {
    try{
        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { email, password } = value;

        if (!email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email: email });
        if (!user){
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const resUser = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        res.status(200).json({ message: "Login successful",user: resUser, token: token });
    }catch(err){ 
        res.status(500).json({ message: "Server error" });
    }

}

module.exports = {
    registerUser,
    loginUser
}
