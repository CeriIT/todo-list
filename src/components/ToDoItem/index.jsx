// import React from 'react'
import './index.css';

//destructuring method
const TodoItem = (props) => {
    const { todo, index, completeToDo, removeToDo } = props;
    return (
        <div className="todo">
            {todo.text}
            <div className={`todo ${todo.isCompleted ? "complete": ""}`}>
                <button onClick={() => completeToDo(index)}>Complete</button>
                <button onClick={() => removeToDo(index)}>X</button>
            </div>
        </div>)
}

// Ternary is single line if statement
// to evaluate condition 
// condition ? action_a : action_b
// e.g. isCompleted ? line-through text :

// const TodoItem = (props) => {
//     // console.log("Found Props:", props)
//     return (
//         <div className="todo">
//             {props.todo}
//         </div>
//     )
// }

export default TodoItem