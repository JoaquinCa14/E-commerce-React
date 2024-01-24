import React from 'react'

const Card = ({ id, nombre, precio }) => {
    return (
        <div>
            <h3>{nombre}</h3>
            <p>{precio}</p>
        </div>
    )
}

export default Card