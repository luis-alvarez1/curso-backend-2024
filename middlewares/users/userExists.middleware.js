import User from "../../models/user";

const userExists = async (req, res, next) => {
    const user = await User.findOne({
        where: {
            id: +req.params.id,
        },
    });

    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    next();
};

export default userExists;
