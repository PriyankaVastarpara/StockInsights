// controllers/categoryController.js

const User = require('../models/user');

exports.createUser= async (req, res) => {
    try {
        const { userName } = req.body;
        // Check if the category already exists
        const existingUser = await User.findOne({ userName });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists in the database' });
        }
        // If category does not exist, create a new category record
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created successfully',user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User updated successfully', category });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUserById = async (req, res) => {
    
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
