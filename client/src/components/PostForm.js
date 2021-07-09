import React, { useState } from 'react'

const PostForm = ({addPost}) => {
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
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Content</label>
                <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)}></input>
                <label>Date</label>
                <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
                <input className="submit-button" type="submit"/>
            </form>
        </div>
    )
}

export default PostForm;