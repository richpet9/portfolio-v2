import React, { Component } from 'react';
import Input from '../components/Input';

//Stylesheet

class Contact extends Component {
    render() {
        return (
            <main id="contact-container">
                <h1 className="header" style={{ marginBottom: '16px' }}>
                    Contact me
                </h1>
                <form id="contact-form">
                    <div className="flex space-between">
                        <Input type="text" label="FULL NAME" />
                        <Input type="text" label="EMAIL" />
                    </div>
                    <Input type="textarea" label="MESSAGE" />

                    <input type="button" id="contact-send" value="SEND" />
                </form>
            </main>
        );
    }
}

export default Contact;
