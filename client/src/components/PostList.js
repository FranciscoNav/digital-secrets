import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostLink from './PostLink';

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [postFormFlag, setPostFormFlag] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("/posts")
          .then((r) => r.json())
          .then(data => {
            console.log("fetch all posts", data)
            if(data.error){
                setError(data.error)
            }else{
                setPosts(data)
            }
          })
    }, []);

    const addPost = (post) =>{
        fetch("/posts",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(post)
        })
        .then(r => r.json())
        .then(data =>{
            setPosts([...posts, data])
            setPostFormFlag(false)
        })
    }

    const postsList = posts.map( p => <PostLink key={p.id} post={p} />)

    return (
        <div>
            {posts.length > 0 ?
                <div className="card">
                    <h3>Here are all your secret posts. Just click to view!</h3>
                    {postsList}
                    {postFormFlag ? 
                        <PostForm addPost ={addPost}/>
                        :
                        <button className="submit-button" onClick={() => setPostFormFlag(true)}>Add New Secret Post</button>
                    }
                </div>
                :
                <div>
                    <h3>No Secret Posts Found</h3>
                    <h3>Click the button below to start</h3>
                    {postFormFlag ? 
                        <PostForm addPost ={addPost}/>
                        :
                        <button className="submit-button" onClick={() => setPostFormFlag(true) }>Add New Secret Post</button>
                    }
                    <hr/>
                </div>
            }
        </div>
    )
}

export default PostList;