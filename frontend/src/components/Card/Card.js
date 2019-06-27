import React, { useState } from 'react';
import './Card.css';

const Card = props => {
    const [showFull, setShowFull] = useState(false);
    const { person } = props;

    const style = {
        zIndex: showFull ? 10 : 2
    };

    //Big function to format an int into a phone number string
    const formatPhone = number => {
        if (number.toString().length < 10) {
            console.log(number.toString());
            return '## IMPROPER NUMBER FORMAT';
        }
        if (number.toString().length === 11) {
            const countryCode = Number(number.toString()[0]);
            const areaCode = Number(number.toString().substring(1, 4));
            const middleThree = Number(number.toString().substring(4, 7));
            const lastFour = Number(number.toString().substring(7));
            return countryCode + ' (' + areaCode + ') ' + middleThree + '-' + lastFour;
        } else {
            const areaCode = Number(number.toString().substring(0, 3));
            const middleThree = Number(number.toString().substring(3, 6));
            const lastFour = Number(number.toString().substring(6));
            return '(' + areaCode + ') ' + middleThree + '-' + lastFour;
        }
    };

    return (
        <div className="directory-card-container" onMouseEnter={() => setShowFull(true)} onMouseLeave={() => setShowFull(false)} style={style}>
            <div className="directory-card-image" style={{ backgroundImage: "url('img/test-profile.gif')" }} />
            <div className="directory-card-body">
                <h6 className="name">{person.fullName}</h6>
                <p className="label title">{person.position.toUpperCase()}</p>

                <div className="directory-card-row">
                    <div className="directory-card-ext">
                        <p>x{person.ext}</p>
                        <p className="label">EXTENSION</p>
                    </div>
                    <div className="directory-card-loc">
                        <p>{person.loc}</p>
                        <p className="label">LOCATION</p>
                    </div>
                </div>
                <div className="directory-card-popup">
                    <p>{formatPhone(person.cell)}</p>
                    <p className="label">CELL PHONE</p>
                    <div className="email-container">
                        <a href={'mailto:' + person.email}>{person.email}</a>
                        <p className="label">EMAIL</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
