import redis from "../config/redis";
import User from "../models/user";
import jwt from "jsonwebtoken";

export const GetAllUsers = async (req, res) => {


    const users = await User.findAll();


    res.json(users);
};

export const GetOneUserById = async (req, res) => {
    const user = await User.findOne({
        id: +req.params.id,
    });

    res.json(user);
};

export const CreateUser = async (req, res) => {
    const userToCreate = req.body;

    await User.create(userToCreate);

    res.status(201).json(userToCreate);
};

export const UpdateUserById = async (req, res) => {
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

    res.json(userUpdated);
};

export const DeleteUserById = async (req, res) => {
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
};

export const Login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({
        where: {
            username: username,
            password: password,
        },
    });

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, "backend-2024", {
        expiresIn: 60 * 60,
    });

    res.json({ token: token });
};
