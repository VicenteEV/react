/**
 * Ejemplo de uso de Hook useState
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y además, poder modificarlo.
 */
import React, {useState} from 'react';

const Ejemplo1 = () => {

    const valorIinicial = 0;
    const personaInicial = {
        nombre : 'Martín',
        email : 'martin@asdasjdsan.com'
    }
    /**
     * Queremos que el valor inicial y persona inicial sean parte del
     * estado del componente para asi poder gestionar su cambio y que
     * este se vea reflejado en la vista del componente.
     *
     * const[nombreVariable, funcionParaCambiar = useState(valorInicial)]
     */
    const[contador, setContador] = useState(valorIinicial);
    const[persona, setPersona] = useState(personaInicial);
    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        setContador(contador + 1);
    }
    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@asjkbnasd.com'
            }
        )
    }
    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona :</h2>
            <h3>Nombre : {persona.nombre}</h3>
            <h4>Email : {persona.email}</h4>
            {/* bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;

