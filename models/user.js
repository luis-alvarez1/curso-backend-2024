import { DataTypes } from "sequelize";
import { dbConnection } from "../config/db";

const User = dbConnection.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

User.sync();
export default User;
