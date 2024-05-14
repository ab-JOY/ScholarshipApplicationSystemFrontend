import React from 'react'


export default function Footer() {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h5>Scholarship Application System</h5>
                    <ul className="list-unstyled">
                        <li>123456</li>
                        <li>abajhjsbga</li>
                        <li>anjxbquwy7q2bshq</li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Follow Us</h5>
                    <ul className="list-unstyled">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Have a Question?</h5>
                    <ul className="list-unstyled">
                        <li>email@email</li>
                        <li>123-145-0987</li>
                        <li>123 street, North City, South</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} SCHOLARSHIP APPLICATION SYSTEM | All rights reserved | Terms of Service | Terms of Service
                </p>
            </div>
        </div>
    </div>
  )
}
