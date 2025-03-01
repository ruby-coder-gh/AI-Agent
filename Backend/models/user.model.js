import mongoose from 'mongoose';
import bcrypt from 'bcrypt';  // Fixed typo in bcrypt import
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({ 
    email: {
        type: String,  
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [6, 'Email must be at least 6 characters long'],
        maxLength: [68, 'Email must be at most 255 characters long']
    },

    password: {
        type: String,
        required: true, // Ensure the password is required
        select: false,
    }
});

// Hash password before saving
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

// Fix `this` binding by using a regular function
userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Fix `this` binding by using a regular function
userSchema.methods.generateJWT = function () {
    return jwt.sign({ email: this.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
};   

const User = mongoose.model('User', userSchema);
export default User;
