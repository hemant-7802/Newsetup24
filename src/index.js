// import modules 
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

// import database basics
import { db_name } from "./constant.js";

// configure database path getting form ".env" file which is not showing in github code
dotenv.config({
    path: './.env'
})

// create a constant so that it can handle all express methods.
const app = express()

// create "ifee" function to get quickly response from database.
// use semicolumn before making this function
// "IFEE : ;('callback function')()"
;(async () => {
    try{
        // making a Database connection using mongoose
        await mongoose.connect(`${process.env.DB_URL}/${db_name}`);
        console.log("DB connected");

        // express
        app.listen(`${process.env.PORT}` ,(req, res) => {
            console.log("App is listening on Port number :",process.env.PORT);
        })
    }catch(err){
        console.log("DB not connected");
        console.log("error ----- :",err);
    }
})()
