import React from "react";

function Header() {
    return (
        <div className="header">
            {/* 1st box */}
            <ul>
                <li>
                    <a>Gourmet au Catering</a>
                </li>
            </ul>
            {/* 2nd box */}
            <ul>
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