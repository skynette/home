import express from 'express';
import UserModel from '../model/User.js';

const router = express.Router();

// Route to create a user record
router.post('/users', async (req, res) => {
  try {
    const { username, roles, password, refreshToken } = req.body;
    const newUser = new UserModel({
      username,
      roles,
      password,
      refreshToken,
    });
    const createdUser = await newUser.save();
    res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users' });
  }
});

export default router;
