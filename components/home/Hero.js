import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/sudu.jpg"
                    alt="An image showing me"
                    width={250}
                    height={300}
                />
            </div>
            <h1>Hi, I am Sudarshan</h1>
            <p>I am developing this site using NextJs</p>
        </section>
    );
};

export default Hero;
