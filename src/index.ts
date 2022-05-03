import express, { Application, Request, Response } from "express";
const sequelize = require("./models/index");

const app: Application = express();
const port = 5000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

try {
  app.listen(port, async () => {
    console.log(`Server is running on port ${port}!!`);
  });
} catch (error: any) {
  console.log(`Error occured: ${error.message}`);
}
