import React from 'react'


export default function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Scholarship Services System</h5>
                        <ul className="list-unstyled">
                            <li className="small-font">123456</li>
                            <li className="small-font">abajhjsbga</li>
                            <li className="small-font">anjxbquwy7q2bshq</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li className="small-font">Facebook</li>
                            <li className="small-font">Instagram</li>
                            <li className="small-font">LinkedIn</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Have a Question?</h5>
                        <ul className="list-unstyled">
                            <li className="small-font">email@email</li>
                            <li className="small-font">123-145-0987</li>
                            <li className="small-font">123 street, North City, South</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <hr />
                    <p className="col-sm small-font">
                        &copy;{new Date().getFullYear()} SCHOLARSHIP APPLICATION SYSTEM | All rights reserved | Terms of Service
                    </p>
                </div>
            </div>
        </div>
    )
}
