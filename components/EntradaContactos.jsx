import React from 'react'

const EntradaContactos = ({contactos = [], dispatch}) => {

    const Eliminar = (id) => {
        const deleteAction = {
            type: 'delete',
            payload: id
        }
       dispatch(deleteAction)
       
    }

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        
                        <th>Nombre</th>
                        <th>Número</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactos.map((contact) => {
                            return <tr key={contact.id}>
                                
                                <td>{contact.nombre}</td>
                                <td>{contact.numero}</td>
                                <td>
                                    <button onClick={() => Eliminar(contact.id)} className='btn btn-danger'>Eliminar</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EntradaContactos
