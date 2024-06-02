import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Disbursed() {

    const {programId_disbursed } = useParams();

    const [programDisbursed, setProgramDisbursed] = useState([])

    useEffect(() => {
        loadProgramDisbursed();
    }, [])

    const loadProgramDisbursed = async () => {
        const disbursed = await axios.get(`http://localhost:8080/disbursedPrograms`)
        setProgramDisbursed(disbursed.data)
    }



    const listProgram = async (programId_disbursed) => {
        await axios.post(`http://localhost:8080/listProgram/${programId_disbursed}`)
    }


    return (
        <div>
            <h2>Disbursed Scholarship</h2>
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
                        programDisbursed.map((programDisbursed, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{programDisbursed.programTitle_disbursed}</td>
                                <td>{programDisbursed.programDescription_disbursed}</td>
                                <td>{programDisbursed.programDeadline_disbursed}</td>
                                <td>{programDisbursed.programEligibility_disbursed}</td>
                                <td>{programDisbursed.programStatus_disbursed}</td>
                                <td>
                                    <button className="btn btn-outline-success mx-2 mt-2"
                                        onClick={() => listProgram(programDisbursed.programId_disbursed)}>
                                        Return To List
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
