import { Sequelize } from "sequelize";

export const dbConnection = new Sequelize(
    "ecommerce_dryzebraat",
    "ecommerce_dryzebraat",
    "67b6ddff49e62bdb7e98671a680af2611f311d96",
    {
        host: "42a.h.filess.io",
        port: "3305",
        dialect: "mariadb",
    }
);
