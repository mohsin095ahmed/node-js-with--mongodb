import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";


export  const create = async(data)=>{
    
    try{
        const password = await bcrypt.hash (data.password, 12);
        
        const user = await new User({...data, password});
         await user.save();
         console.log("servicr--->",user)
         
        return {user, bool:true}; 
               
    }catch(err){
        console.log("err-->",err.message);
        
       return {message:err.message, bool:false};
    }
} 

 export const Signin = async(data)=>{
    console.log(data.email);
    try{
        const user = await User.findOne({email:data.email});
        //console.log("user-->",user);
        const{name, email,_id}= user
        console.log("name-->",name)
        const loginUser={
          name,email,_id
        }
        console.log("log", loginUser)

        if(!user){
            return"user is not fond";
        }
        const compare = await bcrypt.compare(data.password, user.password);
         if(!compare){
            return "passwor is incorect"
         }
         //delete user.password;
        const token = jwt.sign({_id: await user._id},"HEXA"); 
        console.log("token--->", token);
        console.log("user--->",user)
         return {user:loginUser, token};

    }catch(err){
        console.log(err);
        return err;
    }
     

}
   export const deleteUser = async(id) =>{

    try{
     console.log("id--->",id)   
    const user = await User.findOne({_id:id});
  //  const compare = await bcrypt.compare(data.password, user.password)
    // if(!compare){
      //  return "password is incorect";
     //}
     
     console.log( "user--->", await user)
      const res =  await User.deleteOne({_id:id});
      console.log( "rss_-->",res);
    }catch(err){
        console.log("err--->",err)
    }

   }
  

   export const updateUser = async( data)=>{
    console.log(data)
         try{
               const res = await User.updateOne({_id:data.id},{email: data.email})
               console.log(res)
         }catch(err){
            console.log(err)
         }
   };


   export const allUser = async()=>{
    try{
        const user = await User.find({});
        return user
    }catch(err){
        console.log(err)
    }
   }