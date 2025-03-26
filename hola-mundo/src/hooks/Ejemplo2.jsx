/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * useEffect
     * ? Caso1: Ejecutar SIEMPRE un snipper de codigo
     * cada vez que haya un cambio en el estado del componente se
     * ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencia a elemento del dom');
    //     console.log(miRef);
    // });

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga useEffect
     * en caso de que cambie contador 2, no habrá ejecución.
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencia a elemento del dom');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1 o CONTADOR 2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga useEffect
     * en caso de que cambie contador 2, TAMBIEN SE EJECUTA
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE c1/c2');
        console.log('Mostrando referencia a elemento del dom');
        console.log(miRef);
    }, [contador1,contador2]);

    return (
        <div>
            <h1>Ejemplo de useState(), useRef() y useEffect()</h1>
            <h2>Contador 1 : {contador1} </h2>
            <h2>Contador 2 : {contador2} </h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}> Incrementar1</button>
                <button onClick={incrementar2}> Incrementar2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
