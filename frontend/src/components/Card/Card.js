import React, { useState } from 'react';
import { formatPhone } from '../../functions';
import './Card.css';

const Card = props => {
    const [showFull, setShowFull] = useState(false);
    const { person } = props;

    const style = {
        zIndex: showFull ? 10 : 2
    };

    const cell = () => {
        if (formatPhone(person.cell)) {
            return formatPhone(person.cell);
        } else {
            console.error('IMPROPER NUMBER FORMAT FOR ' + (person.fullName + ':' || 'NO NAME INPUT') + ' ' + (person.cell || 'NO NUMBER'));
            return 'IMPROPER CELL #';
        }
    };

    return (
        <div className="directory-card-container" onMouseEnter={() => setShowFull(true)} onMouseLeave={() => setShowFull(false)} style={style}>
            <div
                className="directory-card-image"
                style={{ backgroundImage: `url(/img/profile-images/${person.id}.jpg), url(/img/profile-images/default.gif)` }}
            />
            <div className="directory-card-body">
                <h6 className="name">{person.fullName || 'NO NAME INPUT'}</h6>
                <p className="label title">{person.position.toUpperCase() || 'UNKNOWN'}</p>

                <div className="directory-card-row">
                    <div className="directory-card-ext">
                        <p>x{person.ext || '----'}</p>
                        <p className="label">EXTENSION</p>
                    </div>
                    <div className="directory-card-loc">
                        <p>{person.loc || '----'}</p>
                        <p className="label">LOCATION</p>
                    </div>
                </div>
                <div className="directory-card-popup">
                    <p>{cell()}</p>
                    <p className="label">CELL PHONE</p>
                    <div className="email-container">
                        <a href={'mailto:' + person.email}>{person.email || 'NO EMAIL'}</a>
                        <p className="label">EMAIL</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
