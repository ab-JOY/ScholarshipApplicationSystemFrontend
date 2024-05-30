import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const LandingPage = ({ children }) => {
    const location = useLocation();

    const [showLandingPage, setLandingPage] = useState(false)

    const pathnames = ["/login", "/register", "/admin", "/user"];

    useEffect(() => {
        console.log("this is location", location);

        if (pathnames.includes(location.pathname)) {
            setLandingPage(false);
        } else {
            setLandingPage(true);
        }
    }, [location]);

    return (
        <div>{showLandingPage && children}</div>
    )
}

export default LandingPage;
