import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
    const handleChange = param => {
        props.setSearchQuery(param.target.value);
    };

    return (
        <div id="header">
            <Link to="/" className="container" id="brand">
                CATALYST DIRECTORY
            </Link>

            {props.setSearchQuery ? (
                <div className="container" id="search-container">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Type a name, location, or cell..."
                        style={{ backgroundImage: "url('/img/search-icon.png')" }}
                        onChange={handleChange}
                    />
                </div>
            ) : (
                ''
            )}
        </div>
    );
};
export default Header;
