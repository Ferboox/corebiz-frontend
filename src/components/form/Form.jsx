import React from 'react'

import './Form.css'
export function Form() {
  return (
    <div className='form-container'>
        <h5 className='py-4'>¡Participa en nuestras novedades con promociones y novedades!</h5>
        <div className='d-flex flex-wrap justify-content-center'>
            <div className='mx-2 form'>
                <input type="text" className='form-input'/>
            </div>
            <div className='mx-2 form'>
                <input type="text" className=' form-input'/>
            </div>
            <button className='mx-2'>¡Lo quiero!</button>
        </div>
    </div>
  )
}
