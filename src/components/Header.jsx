import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "../styles/Header.scss"
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    return (
        <nav>
            <HashLink to="/#home"><h1>TechStar</h1></HashLink>
            <main>
                <HashLink to={"/#home"}>Home</HashLink>
                <Link to={"/contact"}>Contact</Link>
                <HashLink to={"/#about"}>About</HashLink>
                <HashLink to={"/#brands"}>Brands</HashLink>
                <Link to={"/services"}>Services</Link>
                {
                    isAuthenticated ?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button> :
                        <button onClick={() => loginWithRedirect()}>Log In</button>


                }
            </main>
        </nav>
    )
}

export default Header