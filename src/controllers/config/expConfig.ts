import express, { Express } from "express";
import cors from "cors";
import routes from "../routes/authController";
import project from "../routes/projectController"
import category from "../routes/category";
import { connectMongoDB } from "../../database/connectDB";


export default function appConfig(app: Express): void {
    connectMongoDB();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.use('/auth', routes)
    app.use('/project', project);
    app.use('/categories', category)
}

