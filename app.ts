import {Application} from "./app/application";
import * as dotenv from 'dotenv';

const config: ConfigurationInterface = {
    NODE_ENV: process.env.NODE_ENV,
    APP_PORT: Number(process.env.PORT) || 4000,
    DB_URL: String(process.env.MONGO_URI)
}


const app: Application = new Application(config);
app.registerMiddleware();
// app.connectMongo();
app.serve();;

