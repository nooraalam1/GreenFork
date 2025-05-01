import React from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from './Footer';

const Maindiv = () => {

const loc = useLocation()
const x = loc.pathname.includes("signin")
const y = loc.pathname.includes("register")
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {!(x || y) && <Footer></Footer>}
        </div>
    );
};

export default Maindiv;