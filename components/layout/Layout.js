import React from "react";
import MainNavigation from "./Main-Navigation";

const Layout = (props) => {
    return (
        <>
            <MainNavigation></MainNavigation>
            <main>{props.children}</main>
        </>
    );
};

export default Layout;
