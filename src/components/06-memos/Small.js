import React from 'react'

/*
    Usar memo para memorizar algo
    solo si sus properties cambian
    entonces va a volverse a renderizar
    de lo contrario va a usar la version
    memorizada cuando tenga que redibujar algo
*/

export const Small = React.memo(({ value }) => {

    console.log('Renderizando nuevamente Small');

    return (
        <small> { value } </small>
    )
});
