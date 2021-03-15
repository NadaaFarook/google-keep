import React from 'react';

import RoomIcon from '@material-ui/icons/Room';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const TodoDisplay = ({todo , search , editPinned , editTodoFunction , setColor , setTagsFunctions , deleteTodo }) => {
    return ( 
       <div> {
            todo.filter(a => a.description.includes(search)).map((todo) => {
            return (
              <div style={{ width: "250px", margin: "auto", border: "1px solid grey" , backgroundColor : todo.color}}
                className="todo-component"
              >
               <div className="flex pinDiv"> 
               <h5>{todo.title}</h5>
               <button onClick={()=>editPinned(todo.id)}>{todo.isPinned ?<RoomIcon /> : <RoomOutlinedIcon />}</button>
               </div>
                <p>{todo.description}</p>
                <div className="flex tagsAndColors">
                <div className="allColors" style={{display: 'flex'}}>
                  {
                    todo.colorArray.map(col =>{
                      return(
                        <div
                        style={{
                          backgroundColor: col,
                          width: "10px",
                          height: "10px",
                          borderRadius: "100%",
                          boxShadow: "0 0 2px 1px #8080805c"
                        }}
                        onClick={()=>setColor(col , todo.id)}
                      ></div>
                      )
                    })
                  }
                </div>
                <select name="currentTag" value={todo.currentTag} onChange={(e)=>setTagsFunctions(e , todo.id)}>{todo.tags.map((a)  =>  {
                    return(<option value={a}>{a}</option>)
                    } 
                    )}
                </select>  
    
               
                </div>
                <div className="Buttons">
                  <button
                   onClick={(e) => {
                    editTodoFunction(todo.id);
                  }}>Edit</button>
                  <button onClick={
                    ()=>deleteTodo(todo.id)
                  }>Delete</button>
                </div>
                
              </div>
            )
          })}
          </div>
     );
}
 
export default TodoDisplay;