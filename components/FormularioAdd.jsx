import React, { useState } from 'react'

const FormularioAdd = ( {dispatch} ) => {

    const [data, setData] = useState({nombre:'', numero:''})

    const [id, setId] = useState(1)

    const {nombre, numero} = data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
        
    }
    
    const actionAdd = {
        type:'add',
        payload:{
            id:id,
            nombre,
            numero,
        }

    }
    const handleAdd = (e) => {
        dispatch(actionAdd);
        setId(id + 1);
        
    }

    return (
        <>

        
        <div className='container'>
            <label className='mx-1 d-grid gap-2'>
                Nombre:{" "} 
                <input 
                onChange={handleChange} 
                name='nombre' 
                value={nombre}
                type="text" 
                className='form-control' 
                autoComplete='off' />
            </label>
            <label className='mx-1 d-grid gap-2'>
                Número:{" "} 
                <input 
                onChange={handleChange} 
                name='numero' 
                value={numero}
                type="text" 
                className='form-control' 
                autoComplete='off' />
            </label>
            <div className="mx-5 d-grid gap-2">
                <button onClick={handleAdd} className='btn btn-info mt-2'>Agregar</button>
            </div>
        </div>
        </>
    )
}

export default FormularioAdd
