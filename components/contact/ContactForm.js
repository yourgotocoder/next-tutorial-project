import React, { useState } from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
    const [emailState, setEmailState] = useState("");
    const [nameState, setNameState] = useState("");
    const [messageState, setMessageState] = useState("");

    const submitFormHandler = (event) => {
        event.preventDefault();
        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
                email: emailState,
                message: messageState,
                name: nameState,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={submitFormHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={emailState}
                            onChange={(event) =>
                                setEmailState(event.target.value)
                            }
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={nameState}
                            onChange={(event) =>
                                setNameState(event.target.value)
                            }
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="message">Your message</label>
                        <textarea
                            type="text"
                            id="message"
                            required
                            rows="5"
                            value={messageState}
                            onChange={(event) =>
                                setMessageState(event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
