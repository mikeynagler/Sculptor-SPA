import React from 'react'
import './DrawerToggleButton.scss'
const DrawerToggleButton = props => {
    return (
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button>
    )
}

export default DrawerToggleButton
 