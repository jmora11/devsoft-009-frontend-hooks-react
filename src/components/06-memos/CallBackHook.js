import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../05-useLayoutEffect/effects.css';

export const CallBackHook = () => {

    const [counter, setCounter] = useState( 10 );

    /*  
        el usecallback recibe como primer argumento
        un función que queremos usar, tendrá una
        versión memorizada de la función en memoria

        entonces React va a saber que la función no
        ha cambiado, si la dependencia no ha cambiado

        la idea es que no se vuelva a generar el botón
        con cada vez que se llame el increment

        se usa para pasar funciones de un componente 
        a otro para que no se deba volver a generar
        - todo el componente
    */
    const increment = useCallback((num) => {
        setCounter(c => c + num);
      }, [ setCounter ],
    );

    /*
      Cuando un useEffect y el efecto tiene una dependencia
      y esa dependencia es la funcion entonces también es recomendado
      usar el use effect, porque de esta manera la funcion no está cambiando


      pero si se tiene la función en una constante, cada vez que se 
      regenere la página, va a crear una nueva funcion en otro espacio en
      memoria, haciendo que siempre se ejecute
    */

    // únicamente hacemos que se ejecute la función onClick, evitando que se genere todo el componente
    // guardando la función que se va a ejecutar en memoria
    // evitamos que cada vez que se vuelva a renderizar todo, cree otra funcion en memoria

    useEffect(() => {
      //
    }, [increment])
    
    

    return (
        <>
            <h1>Call Back Hook:  { counter } </h1>
            <hr />

            <ShowIncrement increment={ increment }/>
        </>
    )
}
