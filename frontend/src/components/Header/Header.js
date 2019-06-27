import React from 'react';
import './Header.css';

const Header = props => {
    return (
        <div id="header">
            <div className="container" id="brand">
                CATALYST DIRECTORY
            </div>
            <div className="container" id="search-container">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Type a name, location, or number..."
                    style={{ backgroundImage: "url('/img/search-icon.png')" }}
                />
            </div>
        </div>
    );
};
export default Header;
