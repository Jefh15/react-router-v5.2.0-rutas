import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Civilization = () => {


    // para poder manejar ls params es un hook
    // con esto veo los params que envie
    // console.log(useParams())

    const { id } = useParams()
    // console.log(id);//MUESTRO EL ID


    // hago un estado para poder guardar los datos al estado
    const [pueblo, setPueblo] = useState([])


    // para hacer algo despues de que cargue la pagina
    // HOOK useEffect
    useEffect(
        // es una funcino de flecha
        () => {

            // llamo los datos de mi metodo
            obtenerDatos()

            // para que se ejecute una sola vez uso ,[]
        }, [])


    // funcion para el llamado de la API
    const obtenerDatos = async () => {
        // espera la respuesta, nos devuelve un JSON
        // ACCEDEMOS A UNA COVILIZACION EN ESPECIFICA
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        // transformo la data a JSON
        const civilizationObject = await data.json()
        // veo la data en consola
        // console.log(users)
        // ahora guardo la data en el estado
        setPueblo(civilizationObject)

    }


    return (
        <div>
            <h2>Civilization {id}</h2>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.team_bonus}</p>
        </div>
    )
}

export default Civilization