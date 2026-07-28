import { configDotenv } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import http from "http";
import { connectDb } from "./config/connectDb.js";
import cors from "cors";

configDotenv()
const App = express();
const server = http.createServer(App);

App.use(express.json())
App.use(express.urlencoded({extends : true}))
App.use(cookieParser())
App.use(cors({
  origin: "*"
}));

connectDb()
const PORT = process.env.PORT || 9999
server.listen(PORT, () => {
    console.log("Server is runninng on port", PORT, "...");
})