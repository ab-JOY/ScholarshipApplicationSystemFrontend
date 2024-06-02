import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const HideFooter = ({children}) => {
    const location = useLocation();

    const pathnames = ["/", "/programs", "about", "/home"];
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        console.log("this is location", location);
        if(pathnames.includes(location.pathname)){
            setShowFooter(true);
        } else{
            setShowFooter(false);
        }
    }, [location]);
  return (
    <div>{showFooter && children}</div>
  )
}

export default HideFooter