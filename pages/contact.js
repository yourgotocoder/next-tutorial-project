import React from "react";
import ContactForm from "../components/contact/ContactForm";
import Head from "next/head";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Send me your messages" />
            </Head>
            <ContactForm>ContactPage</ContactForm>
        </>
    );
};

export default ContactPage;
