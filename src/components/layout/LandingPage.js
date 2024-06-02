import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const LandingPage = ({ children }) => {
    const location = useLocation();

    const [showLandingPage, setLandingPage] = useState(false)

    const pathnames = ["/", "/programs", "about", "/home"];

    useEffect(() => {
        console.log("this is location", location);

        if (pathnames.includes(location.pathname)) {
            setLandingPage(true);
        } else {
            setLandingPage(false);
        }
    }, [location]);

    return (
        <div>{showLandingPage && children}</div>
    )
}

export default LandingPage;
