import React from 'react'
import '../styles/Home.scss'
import vg from "../assets/2.webp"
import { AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TechStar</h1>
                    <p>Solution to all your Problems</p>
                </main>
            </div>


            <div className='home2'>
                <img src={vg} alt='Graphics' />

                <div>
                    <p>We are your one and only Solution to tech problems you face everyday.</p>
                </div>
            </div>

            <div className='home3' id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget. Risus nec feugiat in fermentum posuere. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Tincidunt id aliquet risus feugiat in ante metus. In ornare quam viverra orci sagittis. Sem integer vitae justo eget magna fermentum. Dictum varius duis at consectetur lorem. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Id aliquet risus feugiat in ante metus dictum at. Proin fermentum leo vel orci porta non. Vitae congue mauris rhoncus aenean. Integer enim neque volutpat ac tincidunt vitae semper. Enim eu turpis egestas pretium aenean. Fames ac turpis egestas sed. Vitae nunc sed velit dignissim sodales ut eu.</p>
                </div>
            </div>


            <div className='home4' id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.1s" }}>
                            <FcGoogle />
                        </div>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillAmazonCircle />
                        </div>
                        <div style={{ animationDelay: "0.7s", color: "#ff0000" }}>
                            <AiFillYoutube />
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillInstagram />
                        </div>

                    </article>
                </div>
            </div>

        </>
    )
}

export default Home