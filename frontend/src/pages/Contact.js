import React, { useState, useRef } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

const checkMarkSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{ position: 'relative', top: '2px' }}>
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
    </svg>
);

const Contact = () => {
    // Set up the refs we need
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const submitRef = useRef(null);
    const [disableButton, setDisableButton] = useState(false);
    const [status, setStatus] = useState(null);
    const [attempts, setAttempts] = useState(1);

    const sendEmail = (body) => {
        // Increment attempts
        setAttempts(attempts + 1);

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
                    setStatus(<span>{checkMarkSVG} Message successfully sent!</span>);
                }
            })
            .catch((err) => {
                console.error('SERVER: Error sending message: ' + err);
                setStatus(<span>Something went wrong, please try again! Attempts: {attempts}</span>);
                setDisableButton(false);
            });
    };

    const handleSubmit = () => {
        setDisableButton(true);
        setStatus(
            <span>
                <Spinner /> Sending...
            </span>
        );

        // Check inputs
        let ok = true;
        if (!nameRef.current.value) {
            nameRef.current.style.borderColor = 'red';
            ok = false;
        }
        if (!emailRef.current.value || !emailRef.current.value.includes('@')) {
            emailRef.current.style.borderColor = 'red';
            ok = false;
        }
        if (!messageRef.current.value) {
            messageRef.current.style.borderColor = 'red';
            ok = false;
        }
        if (!ok) {
            setStatus('Please complete all fields before sending!');
            setDisableButton(false);
            return;
        }

        // Create body content
        const body = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };

        sendEmail(body);
    };
    return (
        <main id="contact-container">
            <h1 className="header" style={{ marginBottom: '16px' }}>
                Contact me
            </h1>
            <form id="contact-form">
                <div className="flex space-between">
                    <Input ref={nameRef} type="text" label="FULL NAME" />
                    <Input ref={emailRef} type="email" label="EMAIL" />
                </div>
                <Input ref={messageRef} type="textarea" label="MESSAGE" />

                <Button ref={submitRef} id="contact-send" value="Send Message" onclick={handleSubmit.bind(this)} disabled={disableButton} />
                <span className="form-status" style={{ marginLeft: '8px' }}>
                    {status}
                </span>
            </form>
        </main>
    );
};

export default Contact;
