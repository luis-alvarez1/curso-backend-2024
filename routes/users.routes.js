import { Router } from "express";
import checkIdNumber from "../middlewares/checkIdNumber.middleware";
import userExists from "../middlewares/userExists.middleware";
import User from "../models/user";

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
    const dbUsers = await User.findAll();

    res.json(dbUsers);
});

usersRouter.get("/:id", [checkIdNumber, userExists], (req, res) => {
    const user = User.findOne({
        id: +req.params.id,
    });

    res.json(user);
});

// GET => app.com/users
// POST {name:"Luis"} => app.com/users

usersRouter.post("/", async (req, res) => {
    const userToCreate = req.body;

    await User.create(userToCreate);

    res.status(201).json(userToCreate);
});

// PATCH { name: "Juan" } => app.com/user/3
usersRouter.patch("/:id", [checkIdNumber, userExists], async (req, res) => {
    await User.update(req.body, {
        where: {
            id: req.params.id,
        },
    });

    const userUpdated = await User.findOne({
        where: {
            id: +req.params.id,
        },
    });

    console.log(userUpdated);

    res.json(userUpdated);
});

usersRouter.delete("/:id", [checkIdNumber, userExists], async (req, res) => {
    const userToDelete = await User.findOne({
        where: {
            id: +req.params.id,
        },
    });

    await User.destroy({
        where: {
            id: +req.params.id,
        },
    });

    res.json(userToDelete);
});

export default usersRouter;
