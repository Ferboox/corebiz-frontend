import React from 'react'

import Carousel from 'react-bootstrap/Carousel';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css'

export function Slider() {
  return (
    <div className='slider-container'>
        <Carousel>
            <Carousel.Item>
                <img className="d-block" src="https://picsum.photos/500/300?img=1" alt="First slide"/>
            </Carousel.Item>

            <Carousel.Item>
                <img className= "d-block" src="https://picsum.photos/500/300?img=2" alt="Second slide"/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block" src="https://picsum.photos/500/300?img=3" alt="Third slide" />
            </Carousel.Item>

        </Carousel>
    </div>
  )
}
