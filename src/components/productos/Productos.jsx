import React from 'react'
import Producto from './producto/Producto'

import './Productos.css'

export default function Productos({productos}) {
  return (
    <div className='productos-container'>
        <div className='title'>
            <h5>Más vendidos</h5>
            <div className='brder-bottom'></div>
        </div>
        <div className='productos-zone'>
            <div className='row'>
                {productos.map((producto) => 
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <Producto key={producto.id} producto={producto}></Producto>
                    </div>

                )}
            </div>
        </div>
    </div>
  )
}
