import { DataTypes } from "sequelize";
import { dbConnection } from "../config/db";

const User = dbConnection.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.sync();
export default User;
