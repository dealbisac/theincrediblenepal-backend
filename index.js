import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

//connecting the database
const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (err) {
        console.log("Error in connecting database");
        throw err
    }
};

mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
});

mongoose.connection.on("error", (err) => {
    console.log("Error in connecting database");
    throw err
});

mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected successfully");
});


app.listen(8000, () => {
    connect();
    console.log("Server is running on port 8000.");
});

