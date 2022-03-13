import React, { useCallback, useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos'))  || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos]);

    /* 
        Con el uso del hook useCallback hacemos que
        únicamente se genere nuevamente el componente que 
        necesitamos exactamente

        en este caso, tenemos una lista, y esta lista tiene 4
        items, una vez que carguemos la lista podremos ver eso
        que se cargó la lista y que cargó 4 elementos, pero si 
        añadimos un nuevo elemento se volverá a cargar la lista
        y volverá a cargar 5 elementos completamente

        la idea es que, cuando se añada un nuevo elemento no se 
        deban volver a cargar los otros 4 elementos que ya se habían
        cargado
    */

    const handleDelete = useCallback(( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }, [dispatch]);
    
    const handleToggle = useCallback(( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }, [dispatch]);

    const handleAddTodo = useCallback((newTodo) =>
        dispatch({
            type: 'add',
            payload: newTodo
        }), [dispatch]
    );

    return (
        <>
            <h1>Lista de tareas ( {todos.length} )</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={ todos }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />
                </div>
                <div className='col-5'>
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </>
    )
}
