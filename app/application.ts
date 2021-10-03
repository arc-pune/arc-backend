import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";


export class Application {

    private app;
    private config: ConfigurationInterface;

    constructor(config: ConfigurationInterface) {
        this.config = config;
        this.app = express();
    }


    public registerMiddleware(): void {
        this.app.use(cookieParser());
        this.app.use(cors);
        this.app.use(morgan(this.config.NODE_ENV === "production" ? "common" : "dev"));
        this.app.use(express.json());

    }

    public connectMongo(): void {
        mongoose.connect(this.config.DB_URL, {
            "dbName": (this.config.NODE_ENV === "production" ? "prod" : "staging")
        })
            .then(() => {
                console.log("✅ Database Connected!");
            });
    }

    public serve(): void {
        this.app.listen(this.config.APP_PORT, () => {
            console.log("🚀 Server Ready! at port:", this.config.APP_PORT);
        });
    }

}
