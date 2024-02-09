import React from "react";
import "../styles/NavbarReact.css"
import LightLogo from "../images/TrebbleClef_LIGHT-logo.png"
import DarkLogo from "../images/TrebbleClef_DARK-logo.png"

export default function NavbarReact(props) {
    return (
        <nav className={props.darkMode ? "header-full--dark" :"header-full--wrapper"}>
            <div className="text-image--wrapper">
                <img className="image-logo" src={props.darkMode ? DarkLogo : LightLogo} alt="LogoReact" />
                <h1 className={props.darkMode ? "heading--dark" : "heading"}>RandomFacts</h1>
            </div>

            <label className="toggle">
                <span className="toggle-label light">Light</span>
                <input onClick={props.toggleDarkMode} className="toggle-checkbox" type="checkbox" />
                <div className="toggle-switch"></div>
                <span className="toggle-label dark">Dark</span>
            </label>

        </nav >

    )
}