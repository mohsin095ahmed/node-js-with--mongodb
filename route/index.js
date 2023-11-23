import express from "express";
import router from "./user.js";
import uploadRouter from "./upload.js";
import postRouter from "./post.js";
const route = express.Router();
route.use("/user",router);
route.use("/upload", uploadRouter)
route.use("/post",postRouter)




export default route;