import { useState } from "react";


const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Test Todo",
      description: "This is a test todo. You can delete it later.",
      color: "white",
      colorArray: ["green", "blue", "yellow", "white"],
      isCompleted: false
    }
  ]);
  const [addTodo, setAddTodo] = useState({
    id: Date.now(),
    title: "",
    description: "",
    color: "green",
    colorArray: ["green", "blue", "yellow", "white"],
    isCompleted: false
  });
  //const [editTodo, setEditTodo] = useState({});
  // const completeTodo = (id) => {
  //   return setTodo(
  //     todo.map((a) =>
  //       a.id === id ? { ...a, isCompleted: !a.isCompleted } : { ...a }
  //     )
  //   );
  // };
  const addTodoo = (e) => {
    const { name, value } = e.target;
    setAddTodo({
      ...addTodo,
      [name]: value
    });
  };
  const submitTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, addTodo]);
    setAddTodo({
      id: Date.now(),
      title: "",
      description: "",
      color: "white",
      colorArray: ["green", "blue", "yellow", "white"],
      isCompleted: false
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
   
  // const editTodoFunction = (id) => {
  //   return todo.map((i) => (i.id === id ? setEditTodo(i) : ""));
  // };

  return (
    <div className="App">
      <h1>My Todo</h1>
      {/* new inputs */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        className="inputs-section"
      >
        <input
          name="title"
          placeholder="Add todo"
          onChange={addTodoo}
          value={addTodo.title}
        />{" "}
        <textarea
          name="description"
          placeholder="Add description"
          value={addTodo.description}
          onChange={addTodoo}
        ></textarea>
        <input
          placeholder="Add color"
          name="color"
          onChange={addTodoo}
          value={addTodo.color}
        />
        
      </div>
      {/* new inputs */}
      <button onClick={(e) => submitTodo(e)}>Submit Todo</button>
      {/* <div>{<input value={editTodo.title} />}</div> */}
      {todo.map((todo) => {
        return (
          <div
            style={{ width: "250px", margin: "auto", border: "1px solid grey" , backgroundColor : todo.color}}
            className="todo-component"
          >
            <h5>{todo.title}</h5>
            <p>{todo.description}</p>
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
            <div className="Buttons">
              <button>Edit</button>
              <button onClick={
                ()=>deleteTodo(todo.id)
              }>Delete</button>
            </div>
            
            {/* <button
              onClick={(e) => {
                editTodoFunction(todo.id);
              }}
            >
              Edit
            </button> */}
          </div>
        );
      })}
      {console.log(todo)}
    </div>
  );
};

export default App;

