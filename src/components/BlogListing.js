import React from 'react'

const BlogList = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <small><i>{props.author}</i> - {props.created_at}</small>
        </div>
    )
}

export default BlogList
