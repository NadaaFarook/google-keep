import { useState } from "react";
import './App.css'
import EditToast from "./components/EditToast";
import TodoDisplay from "./components/TodoDisplay";

const App = () => {
  const [search , setSearch]=useState('')
  const tags = ['No Tags' , 'Important' , 'General']
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Test Todo",
      description: "This is a test todo. You can delete it later.",
      color: "white",
      colorArray: ["green", "blue", "yellow", "white"],
      isPinned: true ,
      tags : tags ,
      currentTag : 'Important'
    }
  ]);
  
  const [addTodo, setAddTodo] = useState({
    id: Date.now(),
    title: "",
    description: "",
    color: "",
    colorArray: ["green", "blue", "yellow", "white"],
    isPinned: false,
    tags : tags ,
    currentTag : ''
  });

  const [editTodo, setEditTodo] = useState({
      id: "",
      title: "",
      description: "",
      color: "",
      colorArray: [],
      isPinned: "" ,
      tags : tags ,
      currentTag : ""
  });


  // const completeTodo = (id) => {
  //   return setTodo(
  //     todo.map((a) =>
  //       a.id === id ? { ...a, isCompleted: !a.isCompleted } : { ...a }
  //     )
  //   );
  // };
  const addTodoo = (e) => {
    const { id, value } = e.target;
    setAddTodo({
      ...addTodo,
      [id]: value
    });
  };
  const editTodoo = (e) => {
    const { name, value } = e.target;
    setEditTodo({
      ...editTodo,
      [name]: value
    });
  };


  const submitEditTodo = (id) =>{
        setTodo(todo.map(a => a.id === id  ? {...editTodo} : {...a}));
        setEditTodo({
          id: "",
          title: "",
          description: "",
          color: "",
          colorArray: [],
          isPinned: "",
          tags : tags ,
          currentTag : ''
        })
      
      }




  const submitTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, addTodo]);
    setAddTodo({
      id: Date.now(),
      title: "",
      description: "",
      color: "white",
      colorArray: ["green", "blue", "yellow", "white"],
      isPinned: false,
      tags : tags ,
      currentTag : ''
    });
  };
  const setColor = (col , id) =>{
    return(
      setTodo(todo.map((a) =>
            a.id === id ? { ...a, color: col } : { ...a }
          ))
    )
  }
  const deleteTodo =(id) =>setTodo(todo.filter(t=> t.id !== id))
   
  const editTodoFunction = (id) => {
    return todo.map((i) => (i.id === id ? setEditTodo(i) : ""));
  };
  const editPinned = (id)=> {
    return(
      setTodo(todo.map((e) => 
      e.id === id ? {...e , isPinned : !e.isPinned} : {...e}))
    )
  }
  const setTagsFunctions = (e ,id)=>{
    setTodo(todo.map((a) => 
      a.id === id ? {...a , currentTag : e.target.value} : {...a}))
  }
  return (
    <div className="App">
      <h1>My Todo</h1>
      
      <div className="search">
        <input placeholder='Search something' value={search} onChange={(e)=> setSearch(e.target.value)} />
      </div>
      
      {/* new inputs */}
      <div className="inputs-section">
        <input
        className="input"
          id="title"
          placeholder="Add todo"
          onChange={addTodoo}
          value={addTodo.title}
        />{" "}
        <textarea
         className="input"
          id="description"
          placeholder="Add description"
          value={addTodo.description}
          onChange={addTodoo}
        ></textarea>
        {
          addTodo.colorArray.map(col =>{
            return(
              <div
              id="color"
              value={col}
              style={{
                backgroundColor: col,
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                boxShadow: "0 0 2px 1px #8080805c"
              }}
              onClick={()=>setAddTodo({...addTodo , color : col})}
            ></div>
            )
          })
        }
<select id="currentTag" value={addTodo.currentTag} onChange={addTodoo}>
  
  {tags.map((a)  =>  {
    return(<option value={a}>{a}</option>)
    } 
    )}
</select>  

        
      </div>
      {/* new inputsssss */}
      <button onClick={(e) => submitTodo(e)}>Submit Todo</button>

{editTodo.title !== "" && 
        <EditToast tags={tags} editTodo={editTodo} editTodoo={editTodoo} submitEditTodo={submitEditTodo} />

      }

      <TodoDisplay todo={todo} search={search} editPinned={editPinned} editTodoFunction={editTodoFunction}  setColor={setColor} setTagsFunctions={setTagsFunctions} deleteTodo={deleteTodo} />
      
    </div>
  );
};

export default App;

