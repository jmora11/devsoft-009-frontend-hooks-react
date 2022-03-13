import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './effects.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote } = !!data && data[0];

    const parraroRef = useRef();

    const [boxSize, setBoxsize] = useState({});

    useLayoutEffect(() => {
        setBoxsize(parraroRef.current.getBoundingClientRect());
    }, [quote]);

    return (
        <>
            <h1>Layout effect</h1>


            <blockquote className="blockquote text-end">
                <p
                    ref={parraroRef}
                    className="mb-3"> { quote }
                </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>
     
            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente frase
            </button>
        </>
    );
}
