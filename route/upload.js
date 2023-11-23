import express from "express";
import upload, { uploadImage } from "../controlar/services/upload.js";
const uploadRouter = express.Router();
uploadRouter.post("/",upload.single("file"), async(req,res)=>{
    try{
         uploadImage()
    }catch(err){
        console.log(err);
    }
    
})





export default uploadRouter;