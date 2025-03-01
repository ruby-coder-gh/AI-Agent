import User from "../models/user.model.js"; // Ensure the import is named correctly

export const createUser = async (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const hashedPassword = await User.hashPassword(password); // Use User instead of user
    const newUser = new User({ email, password: hashedPassword }); // Use User instead of user

    await newUser.save(); // Save the new user instance to the database
    return newUser; // Return the new user instance
}