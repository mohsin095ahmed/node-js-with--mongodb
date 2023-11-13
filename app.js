import exprees from "express";
import route from "./route/index.js";
import mongoose from "./controlar/services/db/index.js";

const app = exprees();
const db = mongoose.connection;
app.use(exprees.json());
db.on("error", console.error.bind(console, "conection err:"));
db.once("open", ()=>{
    console.log("data base conected");
});
app.use("/",route);




app.listen(2000,(req, res)=>{
    console.log("app run on 2000 port");
})