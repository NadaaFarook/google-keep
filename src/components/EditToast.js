import React from 'react';
//import '../App.css'


const EditToast = ({tags , editTodo , editTodoo , submitEditTodo}) => {
    return ( 
        <div class="EditToast">
        <input
          name="title"
          placeholder="Edit todo"
          onChange={editTodoo}
          value={editTodo.title}
        />{" "}
        <textarea
          name="description"
          placeholder="Edit description"
          value={editTodo.description}
          onChange={editTodoo}
        ></textarea>
        <input
          placeholder="Edit color"
          name="color"
          onChange={editTodoo}
          value={editTodo.color}
        />
        <select name="currentTag" value={editTodo.currentTag} onChange={editTodoo}>
            {tags.map((a)=>{
            return(
            <option value={a}>{a}</option>
            )})}
        </select>  
        <button onClick={()=>submitEditTodo(editTodo.id)}>Submit Edited Todo</button>
          </div>
     );
}
 
export default EditToast;