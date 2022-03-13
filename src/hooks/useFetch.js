import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    // iniciamos una referencia en true
    const isMounted = useRef(true);

    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    });

    // este useEffect siempre se va a ejecutar
    // ya que no depende de ningún elemento
    // por ende, cuendo se desmonte el componente
    // hacemos que la referencia cambie a false
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    

    useEffect(() => {

        setstate({
            data: null,
            loading: true,
            error: null
        });
        
        fetch( url )
            .then( res => res.json() )
            .then( data => {

                setTimeout(() => {

                    // Hacemos un condicional para saber si
                    // el componente está montado
                    // de ser así podremos hacer sin problemas 
                    // el setState

                    // si el componente no está montado, no haremos
                    // setState para que no nos genere error el app
                    if (isMounted.current) {
                        setstate({
                            loading: false,
                            error: null,
                            data
                        });
                    } else {
                        console.log('SetState no se llamó');
                    }

                }, 500);

            })
    
    }, [url]);
    
    return state;
}
