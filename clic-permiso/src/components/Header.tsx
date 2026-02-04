import React from 'react'
import { Imagen } from './Imagen'
import { Titles } from './Titles'

export const Header = () => {
    return (
        <div style={{ height: '200px', display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
            <Imagen/>
            <div>
                <Titles nombre={'IES Albarregas'}></Titles>
                <Titles nombre={'Hola, Prof Borja'}></Titles>
            </div>
        </div>
    )
}
