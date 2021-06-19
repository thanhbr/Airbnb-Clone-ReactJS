import React from 'react'
import './Header.css'
import Search from './Search'
import Account from './Account'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
                <Link to='/'>
                    <img className="header_icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""/>
                </Link>
                <Search />   
                <Account />
        </div>     
    )
}

export default Header
