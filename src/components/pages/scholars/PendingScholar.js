import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function PendingScholar() {
    const [pendingScholar, setPendingScholar] = useState([])

    const { pendingId } = useParams();

    useEffect(() => {
        loadPendingScholar();
    }, []);

    const loadPendingScholar = async () => {
        const result = await axios.get(`http://localhost:8080/pendingApplication`)
        setPendingScholar(result.data);
    };

    const deletePendingScholar = async (pendingId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this record permanently?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8080/pendingApplication/${pendingId}`);
                loadPendingScholar();
            } catch (error) {
                console.error("Error deleting member:", error);
            }
        }
    }

    const approveSingleRecord = async (pendingId) => {
        try {
            await axios.post(`http://localhost:8080/singlepost/${pendingId}`);
            alert('member approve successfully')
        } catch (error) {
            console.error("Error deleting member:", error);
        }
    }

    const triggerDataTransfer = async () => {
        try {
            await axios.post(`http://localhost:8080/scholar`);
            alert('Data transfer initiated successfully');
        } catch (error) {
            alert('Error initiating data transfer:', error);
        }
    };
    return (
        <div className="container">

            <div className="py-1">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Municipality</th>
                            <th scope="col">School</th>
                            <th scope="col">Course</th>
                            <th scope="col">Year Level</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Email Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingScholar.map((pendingScholar, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{pendingScholar.fullName_pending}</td>
                                    <td>{pendingScholar.age_pending}</td>
                                    <td>{pendingScholar.municipality_pending}</td>
                                    <td>{pendingScholar.school_pending}</td>
                                    <td>{pendingScholar.course_pending}</td>
                                    <td>{pendingScholar.yearLevel_pending}</td>
                                    <td>{pendingScholar.contactNumber_pending}</td>
                                    <td>{pendingScholar.emailAddress_pending}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary mx-2 mt-2"
                                            to={`/editpendingScholar/${pendingScholar.pendingId}`}>
                                            Edit
                                        </Link>
                                        <button className="btn btn-outline-success mx-2 mt-2"
                                            onClick={() => approveSingleRecord(pendingScholar.pendingId)}>
                                            Approve
                                        </button>
                                        <button className="btn btn-danger mx-2 mt-2"
                                            onClick={() => deletePendingScholar(pendingScholar.pendingId)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                            )
                        }

                    </tbody>
                </table>

            </div>

            <div>
                <button className="btn btn-outline-primary mx-2 mt-2" onClick={triggerDataTransfer}>
                    Approve All
                </button>
                <Link className="btn btn-outline-danger mx-2 mt-2" to="/admin">
                    Back to Dashboard
                </Link>
            </div>
        </div>
    )
}
