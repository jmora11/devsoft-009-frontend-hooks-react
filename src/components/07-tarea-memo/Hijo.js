import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary m-3"
            onClick={ () => incrementar( numero ) } // únicamente hacemos que se ejecute la función onClick, evitando que se genere todo el componente
        >
            { numero }
        </button>
    )
});
