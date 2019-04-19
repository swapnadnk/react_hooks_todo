import React, { useState } from 'react';

function Todo({ todo, index, completeTodo, deleteTodo }){
    return (
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
        className="todo">
        { todo.text }
        <div>
            <button onClick={()=> completeTodo(index)}>Compete</button>
            <button onClick={()=> deleteTodo(index)}>Delete</button>
        </div>
        </div>
    )
}

export default Todo;