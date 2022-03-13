import React, { useEffect, useState } from 'react'

import './effects.css';
import { Message } from './Message';

export const SimpleForm= () => {

    const [state, setState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = state;
    
    useEffect( () => {
        // console.log('Hey!')
    }, []);

    useEffect( () => {
        // console.log('Form changed')
    }, [state]);

    useEffect( () => {
        // console.log('Email changed')
    }, [email]);

    const handleInputChange = ({ target }) => {

        setState({
            ...state,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>Use Effect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type="text"
                    name="name"
                    placeholder='Ingresa tu nombre'
                    className='form-control'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    type="text"
                    name="email"
                    placeholder='Ingresa tu correo'
                    className='form-control mt-2'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />

                { ( name === '123') && <Message /> }
            </div>
        </>
    )
}
