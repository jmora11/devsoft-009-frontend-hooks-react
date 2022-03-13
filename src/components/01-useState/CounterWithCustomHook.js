import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter( 100 )
    
    return (
        <>
            <h1>Counter With Custom Hook: { state } </h1>
            <hr />

            <button onClick={ () => increment(3)} className="btn btn-primary m-5">
                +1
            </button>
            <button onClick={ reset } className="btn btn-secondary m-5">
                Reset
            </button>
            <button onClick={ () => decrement(3)} className="btn btn-danger">
                -1
            </button>
        </>
    )
}
