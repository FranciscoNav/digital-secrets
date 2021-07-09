import React, { useState, useEffect } from 'react'
import EditForm from './EditForm';

const Post = (props) =>{
    const [post, setPost] = useState([])
    const [error, setError] = useState("")
    const [editFormFlag, setEditFormFlag,] = useState(false)

    useEffect(() => {
        fetch(`/posts/${props.match.params.id}`)
        .then((r) => r.json())
        .then(data => {
            console.log("fetch all posts", data)
            if(data.error){
                setError(data.error)
            }else{
                setPost(data)
            }
        })
    }, [])

    const deletePost = () =>{
        fetch(`/posts/${post.id}`,{
          method: "DELETE",
          headers:{
            "Content-Type": "application/json"
          },
        })
        .then(() => {
            setPost([]) 
        })
    }

    const editPost = (expense) =>{
        fetch(`/posts/${post.id}`,{
          method: "PATCH",
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body:JSON.stringify(expense)
        })
        .then(resp => resp.json())
        .then((data) => {
            setPost(data) 
        })
        setEditFormFlag(false)
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Posted on - {post.date}</p>
            {editFormFlag ? <EditForm editPost={editPost} post={post} /> : <button onClick={() => setEditFormFlag(true)}>Edit Post</button>} 
            <button onClick={deletePost}> Delete Post</button>
        </div>
    )
}

export default Post
