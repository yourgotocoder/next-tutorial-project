import React, { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import Notification from "../ui/notification";

async function SendContactData(contactDetails) {
    const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(contactDetails),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }
}

const ContactForm = () => {
    const [emailState, setEmailState] = useState("");
    const [nameState, setNameState] = useState("");
    const [messageState, setMessageState] = useState("");
    const [requestStatus, setRequestStatus] = useState();
    const [requestError, setRequestError] = useState();

    useEffect(() => {
        if (requestStatus === "success" || requestStatus === "error") {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [requestStatus, requestError]);

    const submitFormHandler = async (event) => {
        event.preventDefault();
        setRequestStatus("pending");

        try {
            await SendContactData({
                email: emailState,
                message: messageState,
                name: nameState,
            });
            setRequestStatus("success");
            setEmailState("");
            setNameState("");
            setMessageState("");
        } catch (err) {
            setRequestError(err.message);
            setRequestStatus("error");
        }
    };

    let notificationdata;

    if (requestStatus === "pending") {
        notificationdata = {
            status: "pending",
            title: "Sending",
            message: "Your message is on its way!",
        };
    }

    if (requestStatus === "success") {
        notificationdata = {
            status: "success",
            title: "Success",
            message: "Your message is sent successfully",
        };
    }

    if (requestStatus === "error") {
        notificationdata = {
            status: "error",
            title: "Error",
            message: requestError,
        };
    }
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
            {notificationdata && (
                <Notification
                    status={notificationdata.status}
                    title={notificationdata.title}
                    message={notificationdata.message}
                />
            )}
        </section>
    );
};

export default ContactForm;
