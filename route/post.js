import express from "express";
import { createPost, editPost, getAllPost, removePost } from "../controlar/services/post.js/post.js";
import Post from "../models/post.js";
const postRouter = express.Router();

postRouter.get("/", async(req,res)=>{
    try{
        const allpost = await getAllPost();
        return res.status(201).send({status:"201", allpost}) 
    
    }catch(err){
        console.log(err);
        return res.status(400).send({status:"400", message:err.meassage})
    }
    
})
postRouter.post("/", async(req,res)=>{
    console.log(req.body)
     const { title, post, author, image} = req.body;
     try{
         const data =await createPost({title,post,author,image})
         console.log(data)
         return res.status(201).send({status:"201", meassage :data})
     }catch(err){
        console.log("err---->", err)
     }
})
postRouter.put("/",async(req,res)=>{
   
    try{
    const result = await editPost(req.body);
     if(!result.find)  return res.status(201).send({status:"201", meassage:result})
   }catch(err){
    console.log(err)
    return res.status(401).send({status:"401", meassage:"post is not exist"})
   }


})
postRouter.delete("/",async(req,res)=>{
    try{
        const postid = req.body._id;
        const result = await removePost(postid);
        console.log(result)

        if(!result.find)  return res.status(201).send({status:"201", meassage:result})

       // return res.status(403).send({status:"403", message:"post in not exist"})
       
    }catch(err){
        return res.status(400).send({status:"400", message:"post is not exist"})
    }
    
})

export default postRouter;