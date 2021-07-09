import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostLink from './PostLink';
// import Post from './PostForm';

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
 
    // const postsList = posts.map( p => <li key={p.id}>{p.title} - {p.date}</li>)
    const postsList = posts.map( p => <PostLink key={p.id} post={p} />)

    return (
        <div>
            {posts.length > 0 ?
                <div>
                    {postsList}
                    {postFormFlag ? 
                        <PostForm addPost ={addPost}/>
                        :
                        <button onClick={() => setPostFormFlag(true)}>Add New Secret Post</button>
                    }
                    <hr/>
                </div>
                :
                <div>
                    <h3>No Secret Posts Found</h3>
                    <h3>Click the button below to start</h3>
                    {postFormFlag ? 
                        <PostForm addPost ={addPost}/>
                        :
                        <button onClick={() => setPostFormFlag(true) }>Add New Secret Post</button>
                    }
                    <hr/>
                </div>
            }
        </div>
    )
}

export default PostList;