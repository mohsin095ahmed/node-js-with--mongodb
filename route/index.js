import express from "express";
import router from "./user.js";
const route = express.Router();
route.use("/api",router);






export default route;