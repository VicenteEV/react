/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, {useState, useContext} from 'react';

/**
 *
 * @returns Componente 1
 * Disponde de un contexto que va a tener un valor que recibe desde el padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
    // Un estado vacio que se rellenará con los datos del contexto del padre
    const state = useContext(miContexto);
    return (
        <div>
            <h1>
                El token es : {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesión es : {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token : '1234567',
        sesion : 1
    }

    // Estado de este componente

    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData(
            {
                token : 'JWT1235456778',
                sesion : sesionData.sesion + 1
            }
        );
    }
  return (
    <miContexto.Provider value = {sesionData}>
        {/* Todo aqui dento puede leer los datos de sesionData ademas de actualizarse
        Además si se actualiza, los componentes de aquí, también lo actualizan */}
        <h1>Ejemplo de useStatr() y useContext()</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  )
}



