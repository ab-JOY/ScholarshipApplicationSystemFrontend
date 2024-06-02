import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Profile() {

    let navigate = useNavigate();

    const {adminId} = useParams();

    const [admin, setAdmin] = useState({
        email: "",
        adminPassword: "",
        adminFullName: "",
        adminPosition: "",

    })

    const { email, adminPassword, adminFullName, adminPosition } = admin

    const onInputChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/admin/${adminId}`, admin);
        navigate("/admin");
    };


    useEffect(()=>{
        loadAdmin();
    },[])

    const loadAdmin = async ()=>{
        const result = await axios.get(`http://localhost:8080/admin/${adminId}`)
        setAdmin(result.data)
    }
  return (
    <div className="container">
            <div className="form col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
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
                            type={"adminPassword"}
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
                    <div className="space-x-10">
                    <button type="submit" className="btn btn-outline-primary">
                        Save Changes
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
