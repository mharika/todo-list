import './App.css';
import { useState } from 'react';

const TodoItem = ({name, label, setVal}) => {

  let nameClass = name+"Class";
  let nameLabel = name+"Lbl";
  let nameId = name+"Id";
  let nameText = name+"Txt";

  function setText(e) {
    setVal(e.target.value);
  }

  return (
    <div className={nameClass}>
      <label htmlFor={nameId} name={nameLabel}>{label}</label>
      <input type="text" id={nameId} name={nameText} onChange={setText} />    
    </div>  
  );
}

const TodoItemCreator = () => {

  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  function updateTaskName(text) {    
    setTaskName(text);
  }

  function updateTaskDesc(text) {
    setTaskDesc(text);
  }

  return (    
      <form className="createTodoItem">
        <TodoItem name={"taskName"} label={"Task"} setVal={updateTaskName}/>
        <TodoItem name={"taskDesc"} label={"Description"} setVal={updateTaskDesc}/>       
        <h1>{taskName}-{taskDesc}</h1>
      </form>
    );
}


function App() {
  return (
    <>
      <TodoItemCreator />
    </>
  );
}

export default App;
