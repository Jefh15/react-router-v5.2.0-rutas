import React, { useEffect, useState } from 'react'
import {
    Link
} from "react-router-dom"


const Civilizations = () => {


    // hago un estado para poder guardar los datos al estado
    const [equipo, setEquipo] = useState([])


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
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        // transformo la data a JSON
        const civilizationsObject = await data.json()
        // veo la data en consola
        // console.log(users)
        // ahora guardo la data en el estado
        setEquipo(civilizationsObject.civilizations)

    }


    return (
        <div>
            <h2>Civitilizations or Civilization(BY ID in Params)</h2>
            <ul>
                {
                    // recorro equipo que es mi estado donde tengo la data
                    equipo.map((item, index) => (
                        <li
                            key={item.id}>
                            <Link
                                // para hacerlo por id - con los params
                                to={`/civilization/${item.id}`}
                            >Nombre: {item.name} - Expansion: {item.expansion}</Link>
                        </li>
                    ))
                }
            </ul>
            <hr />
        </div>
    )
}

export default Civilizations