import React from 'react';
import {
  Outlet
} from "react-router-dom";

const Layout = () => {

    return (
        <>
            <header>
                <h1>grubmarket</h1>
            </header>
            <main>
                <Outlet /> 
            </main>
        </>
    )
}

export default Layout;