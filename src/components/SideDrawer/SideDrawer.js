import React from 'react'
import { Link } from 'react-router-dom'
import './SideDrawer.scss'
const SideDrawer = props => {
    let classes = props.show? 'sidedrawer show' : 'sidedrawer'
    return (
        <nav className={classes} > 
            <ul className="sidedrawer__link-items">
                <li>
                    <Link className="sidedrawer__link" to="/about">About</Link>
                </li>
                <li>
                    <Link className="sidedrawer__link" to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link className="sidedrawer__link" to="/media">Media</Link>
                </li>
                <li>
                    <Link className="sidedrawer__link" to="/upcomingevents">Upcoming Events</Link>
                </li>
                <li>
                    <Link className="sidedrawer__link" top="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default SideDrawer
