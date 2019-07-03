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
        const nString = number.toString();
        if (nString.length < 10 || nString.length > 11) {
            console.log(
                'ERROR:CARD.JS:15:' +
                    person.fullName.toUpperCase() +
                    ': Expected a 10 or 11 digit number and got: ' +
                    nString +
                    ' (' +
                    nString.length +
                    ')'
            );
            return '## IMPROPER NUMBER FORMAT SEE CONSOLE';
        }
        if (nString.length === 11) {
            const countryCode = Number(nString[0]);
            const areaCode = Number(nString.substring(1, 4));
            const middleThree = Number(nString.substring(4, 7));
            const lastFour = Number(nString.substring(7));
            return countryCode + ' (' + areaCode + ') ' + middleThree + '-' + lastFour;
        } else {
            const areaCode = Number(nString.substring(0, 3));
            const middleThree = Number(nString.substring(3, 6));
            const lastFour = Number(nString.substring(6));
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
