import React from 'react'
import "../styles/Contact.scss"

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact us</h1>

                <form>
                    <div>
                        <label>Name</label>
                        <input type='text' required placeholder='Enter you name..'></input>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type='text' required placeholder='abc@xyz.com'></input>
                    </div>

                    <div>
                        <label>Meassage</label>
                        <input type='text' required placeholder='Tell about your queries'></input>
                    </div>
                    <button type='submit'>Send</button>

                </form>

            </main>
        </div>
    )
}

export default Contact