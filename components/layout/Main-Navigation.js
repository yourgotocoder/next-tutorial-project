import React from "react";
import Logo from "./Logo";
import classes from "./Main-Navigation.module.css";
import Link from "next/link";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
