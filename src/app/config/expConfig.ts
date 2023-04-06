import express, { Express } from "express";
import cors from "cors";
import routes from "../routes";
import { connectMongoDB } from "../../database";


export default function appConfig(app: Express): void {
    connectMongoDB();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(routes);
}