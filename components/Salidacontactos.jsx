import React from 'react'


const Salidacontactos = props => {
    return (
        <div className='m-2 '>
            Contacto N° : {props.id}<br />
            Nombre : {props.name}<br />
            Numero : {props.number}
        </div>
    )
}

export default Salidacontactos
