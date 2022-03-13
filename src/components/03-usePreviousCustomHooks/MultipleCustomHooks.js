import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];


    return (
        <>
            <h1>BreakingBad</h1>

            {
                loading
                    ?
                    (
                        <div className="alert alert-info">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-3"> { quote } </p>
                            <footer className="blockquote-footer">
                                { author }
                            </footer>
                        </blockquote>
                    )
            }

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente frase    
            </button>
        </>
    );
}
