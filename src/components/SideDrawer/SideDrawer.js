import React from 'react'
import { Link } from 'react-router-dom'
import './SideDrawer.scss'
const SideDrawer = props => {
    let classes = props.show? 'sidedrawer show' : 'sidedrawer'
    let [firstLine, secondLine, thirdLine] = Array(3).fill('toggle-button__line');

    if(props.show){
        firstLine += " toggle-button__first-line";
        secondLine += " toggle-button__second-line";
        thirdLine += " toggle-button__third-line";
    } 
    return (
        <nav className={classes} > 
            <div className="toggle-button__wrapper">
                <button className="toggle-button__button" onClick={props.onXClick}>
                    <div className={firstLine}></div>
                    <div className={secondLine}></div>
                    <div className={thirdLine}></div>
                </button>
            </div>
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
                    <Link className="sidedrawer__link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default SideDrawer
