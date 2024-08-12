import { DataTypes } from "sequelize";
import { dbConnection } from "../config/db";

const User = dbConnection.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

await User.sync();
export default User;
