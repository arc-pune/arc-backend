import express from "express";
import mongoose from "mongoose";

export class Application {

    private app;
    private config: ConfigurationInterface;

    constructor(config: ConfigurationInterface) {
        this.config = config;
        this.app = express();
    }

    public async connectMongo(): Promise<void> {
        mongoose.connect(this.config.DB_URL, {
            dbName: (this.config.NODE_ENV === "production" ? "prod" : "staging")
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
