import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormWithCustomHook= () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password  } = formValues;

    useEffect(() => {
      console.log('Email cambió')
    }, [email]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues );
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Form With Custom Hook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="Ingresa tu nombre"
                    className="form-control"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    placeholder="Ingresa tu correo"
                    className="form-control mt-2"
                    autoComplete="new-text"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    placeholder="***************"
                    className="form-control mt-2"
                    autoComplete="new-password"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar    
            </button>
        </form>
    )
}
