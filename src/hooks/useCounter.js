import { useState } from "react"

export const useCounter = ( initalState = 7 ) => {

    const [counter, setCounter] = useState(initalState);

    const increment = () => {
        setCounter( counter + 1 );
    };

    const decrement = () => {
        setCounter( counter - 1 );
    };

    const reset = () => {
        setCounter(initalState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
