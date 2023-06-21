import React from 'react'
import "../styles/Services.scss"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
const Services = () => {
    return (
        <div className='services'>
            <Carousel infiniteLoop autoPlay showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} interval={1000} >
                <div>
                    <img src={img1} alt='carousel image1' />
                    <p className='legend'>Full Stack</p>
                </div>

                <div>
                    <img src={img2} alt='carousel image2' />
                    <p className='legend'>Peer to Peer</p>
                </div>

            </Carousel>
        </div>
    )
}

export default Services