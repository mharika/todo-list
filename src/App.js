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

const TodoItemCreator = ({onAddTask}) => {

  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  function updateTaskName(text) {    
    setTaskName(text);
  }

  function updateTaskDesc(text) {
    setTaskDesc(text);
  }

  function onAdd(e) {
    e.preventDefault ();
    console.log(e);
    onAddTask(taskName, taskDesc);
  }

  return (    
      <form className="createTodoItem" onSubmit={onAdd}>
        <TodoItem name={"taskName"} label={"Task"} setVal={updateTaskName}/>
        <TodoItem name={"taskDesc"} label={"Description"} setVal={updateTaskDesc}/>       
        <button type="submit">Add Task</button>
      </form>
    );
}

const TodoList = ({list}) => {
  return (
    <table>
      <tr>
        <th>Todo</th>
        <th>Description</th>
      </tr>
      {
        list.map((taskItem) => 
          <tr key={taskItem.name}>
             <td>{taskItem.name}</td> 
             <td>{taskItem.desc}</td>
          </tr>
        )
      }
    </table>
  );
}

function App() {  

  const [listOfTasks, setListOfTasks] = useState([]);

  function AddNewTask(name, desc) {    
    setListOfTasks(oldList => [...oldList, {name: name, desc: desc}]);
  }
  
  return (
    <>
      <TodoItemCreator onAddTask={AddNewTask}/>
      <TodoList list={listOfTasks} />
    </>
  );
}

export default App;
