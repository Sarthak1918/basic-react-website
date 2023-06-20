import React from 'react'
import '../styles/Home.scss'
import vg from "../assets/2.webp"
const Home = () => {
    return (
        <>
            <div className='home'>
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

        </>
    )
}

export default Home