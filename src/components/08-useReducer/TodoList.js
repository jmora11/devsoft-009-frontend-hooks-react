import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = React.memo(({todos, handleToggle, handleDelete}) => {
    
    console.log('SE LLAMA EL LIST');
    
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, ix) => (
                   <TodoListItem
                        key={ todo.id }
                        todo={ todo }
                        ix={ ix }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                   />
                ))
            }
        </ul>
    )
});
