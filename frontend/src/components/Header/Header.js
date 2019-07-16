import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
    const searchInput = useRef();

    const handleChange = e => {
        props.setSearchQuery(e.target.value);
    };

    const clearSearch = () => {
        if (props.setSearchQuery) {
            props.setSearchQuery('');
            searchInput.current.value = '';
        }
    };

    return (
        <div id="header">
            <div className="container" id="brand-container">
                <Link to="/" id="brand" onClick={clearSearch}>
                    <img src="/img/wordmark.svg" alt="CATALYST" id="brand-vector" />
                </Link>
                <div id="sub-line">DIRECTORY</div>
            </div>

            {props.setSearchQuery ? (
                <div className="container" id="search-container">
                    <input
                        ref={searchInput}
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
