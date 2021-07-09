import React from 'react'
import { Link } from 'react-router-dom'

const PostLink = ({post}) => {
    
    return (
        <div className='post-link'>
            <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
            </Link>
        </div>
    )
}

export default PostLink;