import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../05-useLayoutEffect/effects.css';

export const MemoHook = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    /*
        Le pasamos la funcion a la cuál queremos memorizar
        el resultado, y le decimos que la dependencia para 
        volver a memorizar un nuevo resultado, es que haya
        cambiado el contador
    */

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <>
            <h1>Counter Memo Hook: <small> { counter } </small></h1>
            <hr />

            <p> { memoProcesoPesado } </p>

            <button
                className='btn btn-primary'
                onClick={ increment }
            >
                +1
            </button>

            <button
                className='btn btn-outline-danger m-3'
                onClick={ () => {
                    setShow( !show );
                }}
            >
               Show / Hide { JSON.stringify(show) }
            </button>
        </>
    )
}
