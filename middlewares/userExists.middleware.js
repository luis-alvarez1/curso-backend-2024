import { users } from "../routes/users.routes";

const userExists = (req, res, next) => {
    const user = users.find((u) => u.id === +req.params.id);

    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    next();
};

export default userExists;
