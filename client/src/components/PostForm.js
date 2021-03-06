import React, { useState } from 'react'

const PostForm = ({addPost, setPostFormFlag}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        addPost({
            title: title,
            content: content,
            date: date
        })
    }

    return (
        <div>
            <form className="post-form" onSubmit={handleSubmit}>
                <h3 className='form-title'>Complete the form below to add a new secrect post!</h3>
                <label>Title</label>
                <br/>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <br/>
                <br/>
                <label>Content</label>
                <br/>
                <textarea type="text" id="content" rows="4" cols="50" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <br/>
                <br/>
                <label>Date</label>
                <br/>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
                <br/>
                <br/>
                <input className="button" type="submit"/>
                <button className="button" onClick={() => setPostFormFlag(false)}>Back</button>
            </form>
        </div>
    )
}

export default PostForm;