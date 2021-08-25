import React, { useState, useEffect } from 'react'
import EditForm from './EditForm';

const Post = (props) =>{
    const [post, setPost] = useState([])
    const [error, setError] = useState("")
    const [editFormFlag, setEditFormFlag] = useState(false)

    useEffect(() => {
        fetch(`/posts/${props.match.params.id}`)
        .then((r) => r.json())
        .then(data => {
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

    if (error ===''){
        return (
            <div>
                {post.id > 0 ?
                    <div>
                        <h2 className='home'>{post.title}</h2>
                        <p className='content'>{post.content}</p>
                        <p>Posted on - {post.date}</p>
                        {editFormFlag ? <EditForm editPost={editPost} post={post} setEditFormFlag={setEditFormFlag}/> : <button className="button" onClick={() => setEditFormFlag(true)}>Edit Post</button>} 
                        <button className="button" onClick={deletePost}> Delete Post</button>
                    </div>
                    :
                    <div>
                        <h2>Post Deleted ! - Click the view all button above to see all your remaining secret posts.</h2>
                    </div>
                }
            </div>
        )
    }else{
        return(
            <div>
                <h3>Not authorized - Please Sign up or Login</h3>
            </div>
            
        )
    }
}

export default Post
