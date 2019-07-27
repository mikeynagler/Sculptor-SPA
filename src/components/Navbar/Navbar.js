import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
const navbar = props => {
    return (
        <header className="navbar">
            <nav className="navbar__navigation">
                <div>
                <DrawerToggleButton click={props.onDrawerToggle}/>
                </div>
                <div className="navbar__logo"><Link className="navbar__link" to="/">Home</Link></div>
                <div className="navbar__navigation-items">
                    <ul>
                        <li>
                            <Link className="navbar__link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="navbar__link" to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link className="navbar__link" to="/media">Media</Link>
                        </li>
                        <li>
                            <Link className="navbar__link" to="/upcomingevents">Upcoming Events</Link>
                        </li>
                        <li>
                            <Link className="navbar__link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default navbar
