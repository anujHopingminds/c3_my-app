import React from "react";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="header">
            {/* 1st box */}
            <ul>
                <li>
                    <a>Gourmet au Catering</a>
                </li>
            </ul>
            {/* 2nd box */}
            {/* <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div> */}
            <ul className={menuOpen ? "open" : ''}>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>
                        Menu
                    </a>
                </li>
                <li>
                    <a>
                        Contact
                    </a>
                </li>
            </ul>
        </div>)
}

export default Header;