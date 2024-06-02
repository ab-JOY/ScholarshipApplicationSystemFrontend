import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function AccountSetting() {

    const { adminId } = useParams();

    const [admin, setAdmin] = useState([])

    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async () => {
        const res = await axios.get(`http://localhost:8080/admin`)
        setAdmin(res.data)
    }

    const deleteAdmin = async (adminId) => {
        const confirmation = window.confirm("Are you sure you want to delete this record permanently?");
        if (confirmation) {
            await axios.delete(`http://localhost:8080/admin/${adminId}`);
            loadAdmin();
        }
    }

    return (
        <div>
            <h2>Admin Accounts</h2>
            <hr />
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Position</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admin.map((admin, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{admin.adminFullName}</td>
                                <td>{admin.email}</td>
                                <td>{admin.privilege}</td>
                                <td>
                                    <Link className="btn btn-outline-primary mx-2 mt-2" to={`/profile/${admin.adminId}`}>
                                        Edit
                                    </Link>
                                    <button className="btn btn-outline-success mx-2 mt-2"
                                        onClick={() => deleteAdmin(admin.adminId)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>

            <Link className="btn btn-outline-danger mx-2 mt-2" to="/admin">
                Back to Dashboard
            </Link>
        </div>
    )
}
