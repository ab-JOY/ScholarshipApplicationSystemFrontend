import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Waiting() {

    const {programId_waiting} = useParams();

    const [programWaiting, setProgramWaiting] = useState([])

    useEffect(() => {
        loadProgramWaiting();
    }, []);

    const loadProgramWaiting = async () => {
        const waiting = await axios.get(`http://localhost:8080/waiting`)
        setProgramWaiting(waiting.data)
    }

    const updateStatusToDisbursed = async (programId_waiting) => {
        await axios.post(`http://localhost:8080/updateStatus/${programId_waiting}`)
    }



    return (
        <div>
            <h2>Waiting For Disbursement</h2>
            <hr />
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Program Title</th>
                        <th scope="col">Program Description</th>
                        <th scope="col">Program Deadline</th>
                        <th scope="col">Program Eligibility</th>
                        <th scope="col">Program Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        programWaiting.map((programWaiting, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{programWaiting.programTitle_waiting}</td>
                                <td>{programWaiting.programDescription_waiting}</td>
                                <td>{programWaiting.programDeadline_waiting}</td>
                                <td>{programWaiting.programEligibility_waiting}</td>
                                <td>{programWaiting.programStatus_waiting}</td>
                                <td>
                                    <button className="btn btn-outline-success mx-2 mt-2"
                                        onClick={() => updateStatusToDisbursed(programWaiting.programId_waiting)}>
                                        Update Status
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
