import { Router } from "express";
import checkIdNumber from "../middlewares/checkIdNumber.middleware";
import userExists from "../middlewares/userExists.middleware";
import User from "../models/user";

export let users = [
    { id: 0, name: "Brandon" },
    { id: 1, name: "Karen" },
    { id: 2, name: "Daniela" },
    { id: 3, name: "Jason" },
];

const usersRouter = Router();

// app.com/users/Daniela

usersRouter.get("/", async (req, res) => {
    const dbUsers = await User.findAll();

    res.json(dbUsers);
});

usersRouter.get("/:id", [checkIdNumber, userExists], (req, res) => {
    const user = users.find((u) => u.id === +req.params.id);

    res.json(user);
});

// GET => app.com/users
// POST [{name:"Luis"}] => app.com/users

usersRouter.post("/", async (req, res) => {
    const { userToCreate } = req.body;

    await User.create(userToCreate);

    res.status(201).json(userToCreate);
});

// PATCH { name: "Juan" } => app.com/user/3
usersRouter.patch("/:id", [checkIdNumber, userExists], (req, res) => {
    const user = users.find((u) => u.id === +req.params.id);

    users = users.filter((u) => u.id !== +req.params.id);

    const userUpdated = {
        id: user.id,
        name: req.body.name,
    };

    users.push(userUpdated);

    res.json(userUpdated);
});

usersRouter.delete("/:id", [checkIdNumber, userExists], (req, res) => {
    const user = users.find((u) => u.id === +req.params.id);

    users = users.filter((u) => u.id !== +req.params.id);

    res.json(user);
});

export default usersRouter;
