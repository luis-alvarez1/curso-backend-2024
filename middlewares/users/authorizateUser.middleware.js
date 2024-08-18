import jwt from "jsonwebtoken";
import User from "../../models/user";
const authorizateUser = async (req, res, next) => {
    const token = req.headers.authorization.split("Bearer ")[1];

    try {
        const { userId } = jwt.verify(token, "backend-2024");

        const userExists = await User.findOne({
            where: {
                id: userId,
            },
        });

        if (!userExists) {
            return res.status(403).json({ message: "Forbidden" });
        }

        next();
    } catch (error) {
        return res.status(400).json({ message: "Token invalid" });
    }
};

export default authorizateUser;
