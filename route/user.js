import express from "express";
import {updateUser, Signin, create, deleteUser, allUser } from "../controlar/services/user.js";
import veryfitoken from "../controlar/services/verifyToken.js";


const router = express.Router();

router.post("/login",async(req, res)=>{
     const client = await  Signin(req.body);
     console.log(client)
     try{
        const { token, user} = client;
        console.log("rote-->",user)
        if( user && token){
        return res.status(201).send({status:"201",  token, user}) 
     }else if( client === "passwor is incorect"){
       return res.status(404).send({status:"404", message: client});

     }else if(client === "user is not fond"){
        return res.status(403).send({status:"403", message: client});
     }
    
     }catch(err){
        console.log(err)
     }

})



router.post("/",async(req, res)=>{
    console.log(req.body);
    try{
        const User = await create(req.body);
        const user = User;
       console.log("user--->",  user);
       const {bool}= user;
       console.log("bool--->",  bool)
        if(bool){
         console.log("yes");
         
         return res.status(200).send({status: "200",  user:  user }); 
        }
        return res.status(409).send({status: "409",  message:`yor email is ${req.body.email} duplicated` }); 
    }catch(err){
        return res.status(409).send({status:"409", message : err.message});
   }
})


router.delete("/:id", async(req, res)=>{
   console.log(req.params.id);
   const id = req.params.id;
   try{
       const res = await deleteUser(id)
   }catch(err){
      console.log("err--->",err)
   }
})


router.put("/:id", async(req,res)=>{
   try{
      const res = await updateUser(req.body);
   }catch(err){
      console.log(err);
   }
})

router.get("/",veryfitoken, async(req,res)=>{
   try{
        const data = await allUser();
        console.log("res--->", data);
        return res.status(201).send({status:"200", user: data}) 
   }catch(err){
      console.log(err)
   }
})

 

export default router;