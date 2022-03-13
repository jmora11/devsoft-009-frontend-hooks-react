import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

import '../05-useLayoutEffect/effects.css';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    /* const incrementar = ( num ) => {
        setValor( valor + num )
    } */

    // únicamente hacemos que se ejecute la función onClick, evitando que se genere todo el componente
    // guardando la función que se va a ejecutar en memoria
    // evitamos que cada vez que se vuelva a renderizar todo, cree otra funcion en memoria
    const incrementar = useCallback(( num ) => {
        setValor( v => v + num );
      }, [setValor]);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
