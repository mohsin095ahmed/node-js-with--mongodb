import mongoose ,{Schema, model} from "mongoose";

const PostSchema = mongoose.Schema({
    title:{
        type: Schema.Types.String,
        required :true
    },
    post :{
        type: Schema.Types.String,
        required :true
    },
    image :{
        type: Schema.Types.String,
        
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required :true
    }
    
})

const Post = mongoose.model("Post", PostSchema);
export default Post;