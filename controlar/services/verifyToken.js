import  jwt  from "jsonwebtoken";

const veryfitoken =(req,res,next)=>{
    console.log(req.headers)
    const { authorization} = req.headers;
    console.log(authorization);
   const token =  authorization.split("  ")[1];
    console.log("token--->",token)
      jwt.verify(token, 'HEXA', function(err, decoded) {
        //  console.log(decoded.foo) 
          if(err){
              console.log("token err--->", err);
              return res.status(401).send({status:"401", message:err.message})
          }
    //      console.log(decoded.foo)
          next()
      });
}
export default veryfitoken;