// import React from 'react';
import { useState } from 'react';

function ToDoForm(props) {
    const { addToDo } = props; //destructuring
    const [value, setValue] = useState("") // empty values at first

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) { //if no value, return nothing
            return;
        } //don't need else because return would end the function
        addToDo(value);
        setValue(''); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Add Todo" onChange={(event) => setValue(event.target.value)} />
        </form>
    )
};

export default ToDoForm;