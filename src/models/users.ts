import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export interface UserSchema {
    name: String
    email: String;
    password: String | undefined;
    createdAt: Date | string;
}

const UserSchema = new mongoose.Schema<UserSchema>({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true, lowercase: true},
    password: {type: String, required: true, select: false},
    createdAt: {type: Date, default: Date.now}
})

// Encrpyt Password
UserSchema.pre('save', async function(next) {
    if(typeof(this.password) == 'string') {
        const hash = await bcrypt.hash(this.password.toString(), 10);
        this.password = hash;
        next();
    }
})

export const User = mongoose.model<UserSchema>('User', UserSchema);