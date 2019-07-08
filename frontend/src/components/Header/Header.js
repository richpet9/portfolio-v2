import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
    const handleChange = param => {
        props.setSearchQuery(param.target.value);
    };

    return (
        <div id="header">
            <div className="container" id="brand-container">
                <Link to="/" id="brand">
                    <img src="/img/wordmark.svg" alt="CATALYST" id="brand-vector" />
                </Link>
                <div id="sub-line">DIRECTORY</div>
            </div>

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
