import React, { useState } from 'react';
import { formatPhone } from '../../functions';
import './Card.css';

const Card = props => {
    const [showFull, setShowFull] = useState(false);
    const { person } = props;

    const style = {
        zIndex: showFull ? 10 : 2
    };

    return (
        <div className="directory-card-container" onMouseEnter={() => setShowFull(true)} onMouseLeave={() => setShowFull(false)} style={style}>
            <div
                className="directory-card-image"
                style={{ backgroundImage: `url(/img/profile-images/${person.id}.jpg), url(/img/profile-images/default.gif)` }}
            />
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
                    <p>{formatPhone(person.cell) || console.error('IMPROPER NUMBER FORMAT: ' + person.fullName + ' ' + person.cell)}</p>
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
