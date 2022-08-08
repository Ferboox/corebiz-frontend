import React from 'react'
import Producto from './producto/Producto'

import './Productos.css'

export default function Productos() {
  return (
    <div className='productos-container'>
        <div className='title'>
            <h5>Más vendidos</h5>
            <div className='brder-bottom'></div>
        </div>
        <div className='productos-zone'>
            <div className='row'>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <Producto></Producto>
                </div>
            </div>
        </div>
    </div>
  )
}
