import React, { useRef } from 'react';
import Input from '../components/Input';

const Contact = () => {
    // Set up the refs we need
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = () => {
        // Create body content
        const body = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };

        // Send the request
        fetch('/api/mail/send', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText + url);
                } else {
                    console.log('Email sent!');
                }
            })
            .catch((err) => {
                console.error('SERVER: Error sending message: ' + err);
            });
    };
    return (
        <main id="contact-container">
            <h1 className="header" style={{ marginBottom: '16px' }}>
                Contact me
            </h1>
            <form id="contact-form">
                <div className="flex space-between">
                    <Input type="text" label="FULL NAME" ref={nameRef} />
                    <Input type="text" label="EMAIL" ref={emailRef} />
                </div>
                <Input type="textarea" label="MESSAGE" ref={messageRef} />

                <input type="button" id="contact-send" value="Send Message" onClick={handleSubmit.bind(this)} />
            </form>
        </main>
    );
};

export default Contact;
