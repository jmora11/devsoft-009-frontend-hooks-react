import React from 'react'

export const TodoListItem = React.memo(({todo, ix, handleToggle, handleDelete}) => {
    
    console.log('SE LLAMA EL ITEM LIST');

    return (
        <li
            key={todo.id}
            className="list-group-item"
        >
            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo.id)}
            >
                {ix + 1}. {todo.desc}
            </p>

            <button
                className='btn btn-danger'
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
});
