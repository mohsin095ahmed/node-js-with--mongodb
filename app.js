import exprees from "express";
import route from "./route/index.js";
import mongoose from "./controlar/services/db/index.js";
//import { ProjectionElementType } from "mongoose";
const app = exprees();
const db = mongoose.connection;
app.use(exprees.json());
db.on("error", console.error.bind(console, "conection err:"));
db.once("open", ()=>{
    console.log("data base conected");
});
app.use("/api",route);


app.use("/", (req,res)=>{
    console.log("start");
    res.send("hello")
})
const PORT =   process.env.PORT || 4000
app.listen(PORT,(req, res)=>{
    console.log("app run on 2000 port");
})