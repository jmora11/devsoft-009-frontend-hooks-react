import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-usePreviousCustomHooks/MultipleCustomHooks';

export const ExampleUseRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h1> Using useRef </h1>
            <hr />

            { show && <MultipleCustomHooks/>}

            <button
                className='btn btn-primary'
                style={{marginLeft: "100px"}}
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show / Hide
            </button>
        </>
    )
}
