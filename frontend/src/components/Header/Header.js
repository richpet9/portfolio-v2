import React from 'react';
import './Header.css';

const Header = props => {
    const handleChange = param => {
        props.setSearchQuery(param.target.value);
    };
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
                    onChange={handleChange.bind(this)}
                />
            </div>
        </div>
    );
};
export default Header;
