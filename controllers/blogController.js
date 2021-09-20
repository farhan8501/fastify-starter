import boom  from 'boom';
import Blog from "../models/Post";
// get all post 
const GetAllPost = async (req, reply) => {
    try {
        let posts = await Blog.find();
        return posts;
    } catch (err) {
        throw boom.boomify(err)
    }
}
// get single post by id 
const GetSinglePost = async (req, reply) => {
    try {
        const id = req.params.id
        let post = await Blog.findById(id);
        return post
    } catch (err) {
        throw boom.boomify(err)
    }
}
const AddNewPost = async (req, reply) => {
    try {
        let post = new Blog(req.body);
        let newpost = await post.save();
        return newpost
    } catch (err) {
        throw boom.boomify(err)
    }
}
const UpdatePost = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await Blog.findByIdAndUpdate(id, req.body, {
            new: true
        });
        return result
    } catch (err) {
        throw boom.boomify(err)
    }
}
const DeletePost = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await Blog.findByIdAndDelete(
            id
        );
        return {Message:"Post Deleted"}
    } catch (err) {
        throw boom.boomify(err)
    }
}

export {
    GetAllPost,
    GetSinglePost,
    AddNewPost,
    UpdatePost,
    DeletePost
}