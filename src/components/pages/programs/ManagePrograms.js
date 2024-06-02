import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ManagePrograms() {

    const { programId } = useParams();

    const [program, setProgram] = useState([])

    useEffect(() => {
        loadProgram();
    }, []);

    const loadProgram = async () => {
        const programs = await axios.get(`http://localhost:8080/programs`);
        setProgram(programs.data)
    }

    const updateStatusToWaiting = async (programId) => {
        await axios.post(`http://localhost:8080/statusUpdate/${programId}`)
    }

    return (
        <div>
            <h2>Application On Going</h2>
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
                        program.map((program, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{program.programTitle}</td>
                                <td>{program.programDescription}</td>
                                <td>{program.programDeadline}</td>
                                <td>{program.programEligibility}</td>
                                <td>{program.programStatus}</td>
                                <td>
                                    <Link className="btn btn-outline-primary mx-2 mt-2" to={`/editprograms/${program.programId}`}>
                                        Edit
                                    </Link>
                                    <button className="btn btn-outline-success mx-2 mt-2"
                                        onClick={() => updateStatusToWaiting(program.programId)}>
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
