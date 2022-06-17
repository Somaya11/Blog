import "./Articles.css"
import { useState } from "react"
import React from 'react'

export default function Articles() {
const [name, setName] = React.useState("")
const [comments, setComments] = React.useState([])
const [comment, setComment] = React.useState("")
const [commentUpdate, setCommentUpdate] = React.useState(null)
const [updateText, setUpdateText] = React.useState("")

React.useEffect(() => {
  const n = localStorage.getItem("comments")
  const filledComments = JSON.parse(n)

  if(filledComments){
    setComments(filledComments)
  }
}, [])

React.useEffect(() => {
  const n = JSON.stringify(comments)
  localStorage.setItem("comments", n)
}, [comments])


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

function deleteComment(id){
  const updatedComments = [...comments].filter((comment)=> comment.id !== id)

  setComments(updatedComments)
}

function editComment(id){
  const renewComments = [...comments].map((comment) => {
    if(comment.id === id){
      comment.text = updateText
    }  
    return comment
  })
  setComment(updateText)
  setCommentUpdate(null)
  setUpdateText("")
}

  return (
    
    <div className="" >
       <div className="articleBody">
       <img
        className="img"
        src="https://blog.homeschoolbuyersco-op.org/hubfs/Block-Based%20Coding%20for%20Newbies-1.png"
        alt=""
        />

      <h1 className="h2">Why Learn to Code?</h1>
        <h3 className> Lorem ipsum dolor sit amet </h3>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta consectetur aperiam voluptate accusantium totam labore voluptates dolore soluta laborum voluptatem explicabo pariatur corporis, esse, sint ratione amet nostrum et neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus aliquam officia mollitia? Pariatur nobis alias quidem, consectetur porro minima sapiente, earum quibusdam neque consequuntur tempora illo, optio eum id beatae!
          </article>
        
          <h3 > Lorem ipsum dolor sit amet </h3>

          <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga alias id quia ipsa ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti assumenda eligendi at iure. Beatae a, nisi laboriosam maiores harum provident veniam omnis accusantium quae illo nulla numquam id tempora. 
          </article>
        
        
        <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga alias id quia ipsa ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti assumenda eligendi at iure. Beatae a, nisi laboriosam maiores harum provident veniam omnis accusantium quae illo nulla numquam id tempora. 
        <br>
        </br>
        <br>
        </br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga alias id quia ipsa ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti assumenda eligendi at iure. Beatae a, nisi laboriosam maiores harum provident veniam omnis accusantium quae illo nulla numquam id tempora.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga alias id quia ipsa ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti assumenda eligendi at iure. 
        <br>
        </br>
        <br>
        </br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga alias id quia ipsa ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti assumenda eligendi at iure. Beatae a, nisi laboriosam maiores harum provident veniam omnis accusantium quae illo nulla numquam id tempora.
        </article>
       
        </div>
   
        
        <div className="comment">
        <h3> Leave A Comment</h3>
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
          
          <button type="submit">Post Comment</button>
        </form>

        {comments.map((comment ) =>( 
          <div>
            <div className="posted-name">{comment.name} says:</div>

            {/* update comment below */}
            {commentUpdate === comment.id ? ( <input
                type="text"
                onChange={e => setUpdateText(e.target.value)}
                value= {updateText}
              />) : (<div className="postedComment" key={comment.id}>{comment.text}</div> ) }
                     
            <button className = "button1" onClick = {() => deleteComment(comment.id) }>Delete</button>
            <button onClick = {() => setCommentUpdate(comment.id)}>Edit</button>
            <button onClick = {() => editComment(comment.id)}>Post Edit</button>
            
          </div>
          
          
          ) ) }
          </div>
    </div>
    
  )
}
