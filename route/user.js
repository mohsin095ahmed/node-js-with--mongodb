import express from "express";

const router = express.Router();

router.post("/",(req, res)=>{
    console.log(req.body);
    return res.send("okay")
})




export default router;