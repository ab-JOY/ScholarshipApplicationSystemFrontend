import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowSideBar = ({ children }) => {
  const location = useLocation();
  
  const pathnames = ["/admin", "/admindashboard"];
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    console.log("this is location", location);
    if (pathnames.includes(location.pathname)) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }
  }, [location]);

  return (
    <div>{showSideBar && children}</div>
  );
};

export default ShowSideBar;
