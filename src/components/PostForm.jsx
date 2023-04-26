import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <form>
            <MyInput type="text"
                     placeholder="Name of post"
                     onChange={e => setPost({...post, title: e.target.value})}
                     value={post.title}/>


            <MyInput type="text"
                     placeholder="Description of post"
                     onChange={e => setPost({...post, body: e.target.value})}
                     value={post.body}/>
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
};

export default PostForm;