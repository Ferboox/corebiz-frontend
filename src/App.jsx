import React, {useState, useEffect} from "react";

import { Form } from "./components/form/Form";
import { MenuNav } from "./components/menuNav/MenuNav";
import Productos from "./components/productos/Productos";
import { Slider } from "./components/slider/Slider";

export function App(){
    // Variable para almacenar los productos obtenidos
    const [productos, setProductos] = useState([])

    // Solo lo utilizaré una vez que se terminé de cargar el componente
    useEffect(() => {
        getProducts();
    }, []);
    
    // Obtener todos los productos mediante la API
    const getProducts = async () =>{
        let response = await fetch('https://corebiz-test.herokuapp.com/api/v1/products')
        setProductos(await response.json())
    }

    return(
    <>
        <MenuNav></MenuNav>
        <Slider></Slider>
        <Productos productos={productos}></Productos>
        <Form></Form>
        <div className="footer">
            <div className="content row mx-auto py-3">
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3">
                    <h5>Ubicación</h5>
                    <div className="brder-white mb-3"></div>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
                    <p>Alphavile SP</p>
                    <p>brasil@corebiz.ag</p>
                    <p>+55 11 3090 1039</p>
                </div>
                <div className="col-lg-4  col-md-12  col-sm-12 col-xs-12 d-flex flex-column align-items-center justify-content-center mb-3">
                    <button className="my-1 row">
                        <div className="col-2 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                            </svg>
                        </div>
                        <div className="col-10 text-justify py-2">
                            CONTÁCTANOS
                        </div>
                    </button>
                    <button className="row my-1">
                        <div className="col-2 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                        </div>
                        <div className="col-10 text-justify">
                            HABLE CON NUESTROSCONSULTOR EN LINEA
                        </div>
                    </button>
                </div>
                <div className="col-lg-4 col-md-12  col-sm-12 col-xs-12 d-flex justify-content-end align-items-center mb-3">
                    <div className="partners mx-1">
                        <p>Created by</p>
                        <img src="https://i.imgur.com/Jq8ak3A.png" alt="" />
                    </div>
                    <div className="partners mx-1">
                        <p>Powered by</p>
                        <img src="https://m3ecommerce.com/wp-content/themes/M3%20Ecommerce/assets/img/pagina-plataforma/banner--logo-vtex.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
)}