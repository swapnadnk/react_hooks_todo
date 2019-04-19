import React, { useState } from 'react';

function TodoForm({addTodo}){
    const [value, setValue] = useState('');

    const onChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} placeholder="Add Todo..." onChange={onChange}/>
        </form>
    )
}

export default TodoForm;