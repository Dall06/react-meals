import React from 'react';
import NavBar from "../../common/NavBar/NavBar";
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