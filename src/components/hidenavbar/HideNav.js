import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const HideNav = ({children}) => {

    const location = useLocation();

    const pathnames = ["/", "/programs", "about", "/home"]; 

    const[showNavBar, setShowNavBar] = useState(false)

    useEffect(()=> {
        console.log("this is location", location)
        if(pathnames.includes(location.pathname)){
            setShowNavBar(true)
        } else{
            setShowNavBar(false)
        }
    }, [location])

    return (
        <div>{showNavBar && children}</div>
    )
}

export default HideNav;
