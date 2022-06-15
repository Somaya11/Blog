import "./Articles.css"
import { useState } from "react"
import React from 'react'

export default function Articles() {
const [name,setName] = React.useState("")
const [comments,setComments] = React.useState([])
const [comment,setComment] = React.useState("")

function submit(e){
    e.preventDefault()
    console.log(e)

    const newComment ={
        id: new Date().getTime(),
        text: comment, name,
        
        completed: false,
    }

    setComments([...comments].concat(newComment))
    setName("")
    setComment("")
}
console.log(comment)
  return (
    
    <div className="commentOne" >
        <h3> Add A Comment</h3>
        <form onSubmit={submit}>
          <div className="Name">
            <input type= "text" 
                   onChange={(e) => setName(e.target.value)} value={name} 
                   className="Name" 
                   placeholder="Name"
                   />
          </div>

          <div className="Commentarea">
            <textarea
                    onChange={(e) => setComment(e.target.value)} value={comment} 
                    placeholder="Write Comment Here..." ></textarea>
          </div>
          
          <button type="submit">Comment</button>
        </form>
      
        {comments.map((comment ) =>( 
          <div>
            <div>{comment.name}</div>
            <div>{comment.text}</div>
          </div>
          
          
          ) ) }
    </div>
    
  )
}
