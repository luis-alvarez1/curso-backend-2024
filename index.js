import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import usersRouter from "./routes/users.routes";
import { dbConnection } from "./config/db";
// import ApiRateLimit from "./middlewares/ratelimit/apiRateLimit.middleware";

const app = express();

app.use(cors());
app.use(bodyParser());
// app.use(ApiRateLimit);

app.use("/users", usersRouter);

try {
    dbConnection.authenticate();
    console.log("Connected to DB");
} catch (error) {
    console.log(error);
}

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
