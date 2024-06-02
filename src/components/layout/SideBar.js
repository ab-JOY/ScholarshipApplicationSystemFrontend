import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCalendarCheck, faClipboard, faDashboard, faGraduationCap, faPlusCircle, faPortrait, faSignOut, faTools, faUser, faUserEdit, faUserGraduate, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="sidebar d-flex flex-column justify-content-space-between bg-dark text-white p-4 vh-100">
        <Link className="d-flex align-items-center">
              <i className="bi bi-bootstrap fs-15 me-2"></i>
              <span className="sidebar-text">Scholarship Services</span>
        </Link>
        <hr className="text-secondary at-2"/>
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
                <Link to="/admin" className="nav-link text-white">
                    <i className="me-2 fs-15"><FontAwesomeIcon icon={faDashboard} size="1x" /></i>
                    <span className="sidebar-text">Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/managePrograms" className="nav-link text-white">
                    <i className="me-2 fs-5"><FontAwesomeIcon icon={faGraduationCap} size="1x" /></i>
                    <span className="sidebar-text">Scholarship Programs</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/pendingScholar" className="nav-link text-white">
                    <i className="me-2 fs-15"><FontAwesomeIcon icon={faUser} size="1x" /></i>
                    <span className="sidebar-text">Pending Applications</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/waiting" className="nav-link text-white">
                    <i className="me-2 fs-15"><FontAwesomeIcon icon={faCalendarAlt} size="1x" /></i>
                    <span className="sidebar-text">Waiting for Disbursement</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/disbursed" className="nav-link text-white">
                    <i className="me-2 fs-15"><FontAwesomeIcon icon={faCalendarCheck} size="1x" /></i>
                    <span className="sidebar-text">Disbursed Scholarship</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/report" className="nav-link text-white">
                    <i className="me-2 fs-15"><FontAwesomeIcon icon={faClipboard} size="1x" /></i>
                    <span className="sidebar-text">Report</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/addAdmin" className="nav-link text-white">
                    <i className="me-2 fs-15"><FontAwesomeIcon icon={faUserPlus} size="1x" /></i>
                    <span className="sidebar-text">Add User</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/addscholar" className="nav-link text-white">
                    <i className="me-2 fs-15"><FontAwesomeIcon icon={faUserGraduate} size="1x" /></i>
                    <span className="sidebar-text">Add New Scholar</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/addprogram" className="nav-link text-white">
                    <i className="me-2 fs-15"><FontAwesomeIcon icon={faPlusCircle} size="1x" /></i>
                    <span className="sidebar-text">Add New Program</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/accounts" className="nav-link text-white">
                    <i className="me-2 fs-15"><FontAwesomeIcon icon={faUserEdit} size="1x" /></i>
                    <span className="sidebar-text">Accounts</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                    <i className="me-2 fs-15"><FontAwesomeIcon icon={faSignOut} size="1x" /></i>
                    <span className="sidebar-text">Logout</span>
                </Link>
            </li>
        </ul>
        <div>
            <hr className="text-secondary"/>
            <i className="bi bi-user"></i>
            <span className="sidebar-text">username</span>
        </div>
    </div>
  )
}
