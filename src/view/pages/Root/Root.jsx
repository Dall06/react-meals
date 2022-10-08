import React from 'react';
import NavBar from "../../resources/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const RootPage = () => {

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default RootPage;