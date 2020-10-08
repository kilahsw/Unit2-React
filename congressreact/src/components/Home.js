import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Logo from '../congresslogo.png'
import Background from '../congressbackground.jpeg'
const Home = (props) => {
    return (
        <div className='container'>
            <img src={Background} style={{ width: '100%', height: '100%' }} />
            <Link to='/List'>
                <img className="over-img" src={Logo} style={{ width: '100px', height: '100px;' }} />
            </Link>
            <p className="text">DANCE AS WAR.<br />DANCE AS PEACE.<br />DANCE AS FREEDOM.</p>
        </div>
    )
}

export default Home

// style = {{ width: '100%', height: 'auto' }}