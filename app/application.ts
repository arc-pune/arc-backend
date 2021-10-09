import express, { Request, Response } from 'express'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";


export class Application {

    private app: express.Application;
    private router: express.Router;
    private config: ConfigurationInterface;

    constructor(config: ConfigurationInterface) {
        this.config = config;
        this.app = express();
        this.router = express.Router();
    }


    public registerMiddleware(): void {

        this.router.get("/admin", (req: Request, res: Response) => {
            console.log("app get ");
            res.send("hello world");
        });
        this.app.use("/", this.router);

    }

    public async connectMongo(): Promise<void> {
        await mongoose.connect(this.config.DB_URL)
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
