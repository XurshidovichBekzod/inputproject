import React from 'react'
import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <header className='header'>
        <nav className='navbar container'>
            <ul className='collection'>
                <li className='item'>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className='item'>
                    <NavLink to={"/input"}>Input</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header