import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
const navbar = props => {
    return (
        <header className="navbar">
            <nav className="navbar__navigation">
                <div>
                <DrawerToggleButton click={props.onDrawerToggle}/>
                </div>
                <div className="navbar__logo"><NavLink className="navbar__link"  activeClassName="active" to="/">TAMI MEIRI</NavLink></div>
                <div className="navbar__navigation-items">
                    <ul>
                        <li>
                            <NavLink className="navbar__link" activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="navbar__link" activeClassName="active" to="/gallery">Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink className="navbar__link" activeClassName="active" to="/media">Media</NavLink>
                        </li>
                        <li>
                            <NavLink className="navbar__link" activeClassName="active" to="/upcomingevents">Upcoming Events</NavLink>
                        </li>
                        <li>
                            <NavLink className="navbar__link" activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default navbar
