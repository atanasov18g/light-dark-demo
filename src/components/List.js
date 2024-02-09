import React from "react";
import "../styles/ListFacts.css"

export default function ListFacts(props) {
    return (
        <main className="list-full--wrapper">
            <h1 className={props.darkMode ? "list-header--dark" : "list-header"}>5 Absolutely Randomly Searched Facts</h1>
            <ul className={props.darkMode ? "ul-wrapper--dark" : "ul-wrapper"}>
                <li>Humans can't walk in a straight line without looking at something.</li>
                <li>Rats will laugh out loud if you tickle them!</li>
                <li>Australia is wider than the moon.</li>
                <li>Sloths can hold their breath longer than dolphins.</li>
                <li>Ketchup was used as medicine! </li>
            </ul>
        </main>
    )
}