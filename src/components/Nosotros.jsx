import React, { useEffect, useState } from 'react'

const Nosotros = () => {


    //hago una constante de tipo array, y dentro tengo objetos 
    // EJEMPLO ESTATICO
    // const datos = [
    //     { id: 1, nombre: 'ReactJS' },
    //     { id: 2, nombre: 'VueJS' },
    //     { id: 3, nombre: 'AngularJS' }
    // ]


    // hago un estado para poder guardar los datos al estado
    const [equipo, setEquipo] = useState([])


    // para hacer algo despues de que cargue la pagina
    // HOOK useEffect
    useEffect(
        // es una funcino de flecha
        () => {
            // console.log('useEffect')
            // cambio el titulo de mi sitio web
            // document.title = 'useEffect'

            // hago el llamado a datos
            // setEquipo(datos)

            // llamo los datos de mi metodo
            obtenerDatos()

            // para que se ejecute una sola vez uso ,[]
        }, [])


    // funcion para el llamado de la API
    const obtenerDatos = async () => {
        // espera la respuesta, nos devuelve un JSON
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        // transformo la data a JSON
        const users = await data.json()
        // veo la data en consola
        // console.log(users)
        // ahora guardo la data en el estado
        setEquipo(users)

    }




    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    // recorro equipo que es mi estado donde tengo la data
                    equipo.map((item, index) => (
                        <li
                            key={item.id}>
                            #Equipo: {index + 1} - ID: {item.id} - Nombre: {item.name} - Email: {item.email}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros