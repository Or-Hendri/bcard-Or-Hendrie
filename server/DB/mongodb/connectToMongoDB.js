const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");

const ENVOIRMENT = config.get("NODE_ENV");
const DB_NAME = config.get("DB_NAME");
const DB_PASSWORD = config.get("DB_PASSWORD");

if (ENVOIRMENT === "development")
  mongoose
    .connect("mongodb://127.0.0.1:27017/BCard_yair_buchnik")
    .then(() =>
      console.log(
        chalk.magentaBright(
          "You have been connected to MongoDB Locally successfully!"
        )
      )
    )
    .catch((error) =>
      console.log(
        chalk.redBright(`Could not connect to mongoDb locally: ${error}`)
      )
    );

if (ENVOIRMENT === "production")
  mongoose
    .connect(
      `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.h4nzzj4.mongodb.net/test`
    )
    .then(() =>
      console.log(
        chalk.magentaBright(
          "You have been connected to MongoDB globbally successfully!"
        )
      )
    )
    .catch((error) =>
      console.log(
        chalk.redBright(`Could not connect to mongoDb globally: ${error}`)
      )
    );

//  "mongodb+srv://yairb221:yb5484256@cluster0.h4nzzj4.mongodb.net/test";
