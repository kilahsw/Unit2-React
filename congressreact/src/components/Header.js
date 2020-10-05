import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img src='https://imgur.com/a/pVCCUeI' alt='CONGRESS logo' />
            </Link>
        </nav>
    )
}

export default Header

// data: ['image/png'], tried for logo image
// will need svg//