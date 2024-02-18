
const FirstDbUser = require('../models/firstDb/User');

exports.createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get user by ID controller
exports.getUserById = async (req, res) => {
    try {
        const user = await UserModel.findOne({ userId: req.params.userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user controller
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await UserModel.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete user controller
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await UserModel.findOneAndDelete({ userId: req.params.userId });
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
