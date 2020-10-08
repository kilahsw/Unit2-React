import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Logo from '../congresslogo.png'
import Background from '../congressbackground.jpeg'
const Home = (props) => {
    return (
        <div>
            {/* <img className="logo" src={Logo} /> */}
            <img className="background" src={Background} />
        </div>
    )
}

export default Home