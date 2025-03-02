import { validationResult } from 'express-validator';
import * as userservice from '../services/user.service.js';
import User from '../models/user.model.js'; // Importing user model
import redisClient from '../services/redis.service.js';   

export const createUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const newuser = await userservice.createUser(req.body.email, req.body.password);
        const token = await newuser.generateJWT();
        return res.status(201).json({ user: newuser, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export const loginUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password'); // Corrected to use User model

        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await user.isValidPassword(password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = await user.generateJWT();

        res.status(200).json({ user, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export const profileController = async (req, res) => {

    console.log(req.user);  
    res.status(200).json({ user: req.user });
}

export const logoutController = async (req, res) => {
    try{


        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        await redisClient.set(token, 'logout', 'EX', 60*60*24);
        res.status(200).send('Logged out successfully ');  
    } catch(err){
        console.log(err);
        res.status(400).send(err.message );
    }
}