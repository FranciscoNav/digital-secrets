import React, { useState, useEffect } from 'react'

const EditForm = ({editPost, post}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        setTitle(post.title)
        setContent(post.content)
        setDate(post.date)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        editPost({
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
                <input type="submit"/>
            </form>
        </div>
    )
}

export default EditForm;