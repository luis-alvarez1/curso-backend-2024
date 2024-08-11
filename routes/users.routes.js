import { Router } from "express";

let users = [
    { id: 0, name: "Brandon" },
    { id: 1, name: "Karen" },
    { id: 2, name: "Daniela" },
    { id: 3, name: "Jason" },
];

const usersRouter = Router();

// app.com/users/Daniela

usersRouter.get("/", (req, res) => {
    res.json(users);
});

usersRouter.get("/:name", (req, res) => {
    const user = users.find((u) => u.name === req.params.name);
    res.json(user);
});

// GET => app.com/users
// POST [{name:"Luis"}] => app.com/users

usersRouter.post("/", (req, res) => {
    const { usersToCreate } = req.body;

    usersToCreate.forEach((utc) => users.push(utc));

    res.json(users);
});

// PATCH { name: "Juan" } => app.com/user/3
usersRouter.patch("/:id", (req, res) => {
    const user = users.find((u) => u.id === +req.params.id);

    users = users.filter((u) => u.id !== +req.params.id);

    const userUpdated = {
        id: user.id,
        name: req.body.name,
    };

    users.push(userUpdated);

    res.json(users);
});

export default usersRouter;
