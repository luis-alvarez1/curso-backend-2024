import { Router } from "express";
import checkIdNumber from "../middlewares/users/checkIdNumber.middleware";
import userExists from "../middlewares/users/userExists.middleware";

import {
    CreateUser,
    DeleteUserById,
    GetAllUsers,
    GetOneUserById,
    Login,
    UpdateUserById,
} from "../controllers/users.controller";
import authorizateUser from "../middlewares/users/authorizateUser.middleware";

const usersRouter = Router();

usersRouter.get("/", GetAllUsers);

usersRouter.get("/:id", [checkIdNumber, userExists], GetOneUserById);

// GET => app.com/users/login/luis/123
// POST { username: LUIS, password: 123} => app.com/users/login
usersRouter.post("/login", Login);

// GET => app.com/users
// POST {name:"Luis"} => app.com/users

usersRouter.post("/", CreateUser);

// PATCH { name: "Juan" } => app.com/user/3
usersRouter.patch("/:id", [checkIdNumber, userExists], UpdateUserById);

usersRouter.delete(
    "/:id",
    [checkIdNumber, userExists, authorizateUser],
    DeleteUserById
);

export default usersRouter;
