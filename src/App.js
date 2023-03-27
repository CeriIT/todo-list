import './App.css';
import { useState } from 'react';
import ToDoForm from './components/ToDoForm'; //rename file to index.jsx so we dont have to specify file names
import TodoItem from './components/ToDoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted:false,
    },
    {
      text: "Meet my friend for lunch",
      isCompleted:false,
    },
    {
      text:"Build really cool todo app",
      isCompleted:false,
    }
  ]);

  const addToDo = (text) => {
    // [...] spread operator allows to make a copy of an array/object and add extra values to it
    const newToDos = [...todos, { text }];
    setTodos(newToDos);
  };

  const completeToDo = (index) => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setTodos(newToDos);
  }

  const removeToDo = (index) => {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setTodos(newToDos);
  }

  // map creates separate components by specifying the key. forEach isn't ideal as it treats it as 1 
  return (
    <div className="app">
      <div className="todo-list">
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} index={index} removeToDo={removeToDo} completeToDo={completeToDo} />
        ))}
        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  );


  // return (
  //   <div>
  //     <h1>My todo list</h1>
  //     <TodoItem todo={"Have a shower"}/>
  //     <TodoItem todo={"Eat a donut"}/>
  //   </div>
  // );
}

export default App;
