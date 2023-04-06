import mongoose from "mongoose";

interface User {
    name: String
    email: String;
    password: String;
    createdAt: Date;
}

const UserSchema = new mongoose.Schema<User>({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true, lowercase: true},
    password: {type: String, required: true, select: false},
    createdAt: {type: Date, default: Date.now}
})