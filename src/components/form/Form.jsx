import React, { useState } from 'react'

import './Form.css'
export function Form() {

  const [success, setSucess] = useState(0)

  // Función para mandar la petición POST a la API.
  const submitForm = async () => {
    let flag = 0;

    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');

    // Limpiamos los textos
    document.getElementById('errorName').innerText = ''
    document.getElementById('errorEmail').innerText = ''

    nameInput.classList.remove('border','border-danger')
    emailInput.classList.remove('border','border-danger')

    // Verificamos que el campo de Nombre este lleno.
    if(!nameInput.value){
      nameInput.classList.add('border','border-danger')
      document.getElementById('errorName').innerText = 'Debes de ingresar tu nombre'
      flag = 1;
    }

    // Verificamos que el campo de Email este lleno.
    if(!emailInput.value){
      emailInput.classList.add('border','border-danger')
      document.getElementById('errorEmail').innerText = 'Debes de ingresar tu email'
      flag = 1;
    }

    // Si no hubo ningún error.
    if(!flag){
      var raw = `{\n    \"email\": \"${emailInput.value}\",\n    \"name\": \"${nameInput.value}\"\n}`;

      var requestOptions = {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: raw,
        redirect: 'follow'
      };

      fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", requestOptions)
        .then(response => response.text())
        .then(result => {
          if(!result.includes('error')){
            setSucess(1)
          }

        })
        .catch(error => console.log('error', error));
    }

  }

  return (
    <div className='form-container'>
        <h5 className='py-4'>¡Participa en nuestras novedades con promociones y novedades!</h5>
        <div className='d-flex flex-wrap justify-content-center'>
            { !success &&
                <>
                  <div className='mx-2 form'>
                    <input type="text" className='form-input' id='name' placeholder='Ingresa tú nombre'/>
                    <small id='errorName' className='text-danger mt-4'></small>
                </div>
                <div className='mx-2 form'>
                    <input type="email" className='form-input' id='email' placeholder='Ingresa tú email'/>
                    <small id='errorEmail' className='text-danger'></small>
                </div>
                <button className='mx-2' onClick={(evt) => submitForm()}>¡Lo quiero!</button>
                </>
            }
            {success &&
                <>
                  <h5>Su correo electrónico ha sido registrado con éxito! </h5>
                  <br />
                  <p>A partir de ahora recibirás novedades y ofertas exclusivas.</p>
                  <button className='btn btn.dark' onClick={() => setSucess(0)}>Registrar nuevo correo electrónico</button>
                </>
            }
        </div>
    </div>
  )
}
