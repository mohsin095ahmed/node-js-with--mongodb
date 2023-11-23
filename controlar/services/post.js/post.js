import Post from "../../../models/post.js"

export const createPost = async({title, post ,author})=>{

          const res = await new Post({title, post, author });
          await res.save(); 
        console.log(res)
        return res;    
}


export const getAllPost = async()=>{
    const res = await Post.find({}).populate("author", "name email");
    console.log("getallpost ", res);
    return res;
}


export const removePost = async(postid)=>{
    const find = await Post.findOne({_id:postid})
    if(find){
        const res = await Post.deleteOne({_id:postid});
        console.log(res)
        return res;
    }
    console.log(find)
    return find

}


export const editPost = async(req)=>{
    //console.log(req);
    const {title, post, _id } = req ;
    const postid = _id;
    const find = await Post.findOne({_id:postid});
    
    if(find){
        if(title && post){
            const update = await Post.updateOne({_id:postid},{title,post});
            return update;
        }
        else if(title){
            const update = await Post.updateOne({_id:postid},{title});
            return update;
        }else if(Post){
            const update = await Post.updateOne({_id:postid},{post});
            return update;
        }
    } 
    return find;
}