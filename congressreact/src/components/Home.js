import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Logo from '../congresslogo.png'
import Background from '../congressbackground.jpeg'
const Home = (props) => {
    return (
        <div className='container' style={{ width: '100%' }}>
            <img className="background" src={Background} />
            <Link to='/List'>
                <img className="over-img" src={Logo} />
            </Link>
            <p className="text">DANCE AS WAR.<br />DANCE AS PEACE.<br />DANCE AS FREEDOM. </p>
            <p className='p2'>CONGRESS = STEP TOGETHER</p>
        </div>
    )
}

export default Home

// style = {{ width: '100%', height: 'auto' }}

// style = {{ width: '100px', height: '100px' }}

// style = {{ width: '100%', height: 'auto' }}