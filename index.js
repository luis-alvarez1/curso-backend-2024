import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import usersRouter from "./routes/users.routes";

const app = express();

app.use(cors());
app.use(morgan());
app.use(bodyParser());

app.use("/users", usersRouter);

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
