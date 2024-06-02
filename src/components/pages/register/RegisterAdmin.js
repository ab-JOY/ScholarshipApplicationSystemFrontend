import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function RegisterAdmin() {
    let navigate = useNavigate()

    const [admin, setAdmin] = useState({
        email: "",
        adminPassword: "",
        adminFullName: "",
        adminPosition: "",
        privilege: ""

    })

    const { email, adminPassword, adminFullName, adminPosition, privilege } = admin

    const onInputChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        try {
            alert("you are about to submit")
            e.preventDefault();
            await axios.post(`http://localhost:8080/admin/signup`, admin);
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    }

    return (
        <div className="container">
            <div className="form col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">New Admin Account</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input
                            type={"email"}
                            className="form-control"
                            placeholder="email"
                            autoComplete="off"
                            required
                            name="email"
                            value={admin.email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">
                            Password
                        </label>
                        <input
                            type={"password"}
                            className="form-control"
                            placeholder="password"
                            required
                            name="adminPassword"
                            value={admin.adminPassword}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="adminFullName" className="form-label">
                            FULL NAME
                        </label>
                        <input
                            type={"adminFullName"}
                            className="form-control"
                            placeholder="FULLNAME"
                            required
                            name="adminFullName"
                            value={admin.adminFullName}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="position" className="form-label">
                            POSITION
                        </label>
                        <input
                            type={"position"}
                            className="form-control"
                            placeholder="position"
                            required
                            name="adminPosition"
                            value={admin.adminPosition}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="privilege" className="form-label">
                            ROLE
                        </label>
                        <input
                            type={"privilege"}
                            className="form-control"
                            placeholder="privilege"
                            required
                            name="privilege"
                            value={admin.privilege}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="space-x-10">
                        <button type="submit" className="btn btn-outline-primary" onSubmit>
                            Signup
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/admin">
                            Cancel
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
