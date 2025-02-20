/* eslint-disable react/prop-types */

import { useState } from "react";


const List = ({tasks, settasks}) => {
    const [todo,settodo]=useState("all");
    if(todo ==="active"){
        tasks = tasks.filter((task)=>!task.completed)
      }else if(todo ==="complete"){
         tasks = tasks.filter((task)=>task.completed)
      }
    const deletetask =(index)=>{
        const newtasks=tasks.filter((_,i)=>i !== index)
        settasks( newtasks);
     }
     const update=(s)=>{
      settodo(s)
     }
     
     
  return (
   <>
    <ul className="todo-list">
      {
        tasks.map((task,index)=>(
        <li key={index}>
            <p>{task.par}</p>
            <button type="button" className="btn2" onClick={()=>deletetask(index)}>Delete</button>
        </li>
        ))
      }
    </ul>
          <div className='buttons'>
          <button type="button" className='btn3'onClick={()=>update("all")}>All</button>
          <button type="button"className='btn3'onClick={()=>update("active")}>Active</button>
          <button type="button"className='btn3'onClick={()=>update("complete")}>Complete</button>
         
      </div>
   </>
  )
}

export default List
