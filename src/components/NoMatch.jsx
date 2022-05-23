import React from 'react'
import { useLocation } from 'react-router-dom'

const NoMatch = () => {

    let location = useLocation()

    return (
        <div>
            <h3>No math for <code>{location.pathname}</code></h3>
        </div>
    )
}

export default NoMatch