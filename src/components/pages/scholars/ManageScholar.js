import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function ManageScholar() {
    const [scholar, setScholar] = useState([]);
    const [query, setQuery] = useState("");
    const [addressFilter, setAddressFilter] = useState("");
    const [totalScholars, setTotal] = useState([0]);

    const { scholarId } = useParams();

    useEffect(() => {
        loadScholars();
    }, []);

    const loadScholars = async () => {
        const result = await axios.get(`http://localhost:8080/scholar`)
        setScholar(result.data)
    }

    const deleteScholar = async (scholarId) => {
        const confirmation = window.confirm("Are you sure you want to delete this record permanently?");
        if (confirmation) {
            try {
                await axios.delete(`http://localhost:8080/scholar/${scholarId}`);
                loadScholars();
            } catch (error) {
                console.error("Error deleting member:", error);
            }
        }
    }

    const handleAddressFilter = (e) => {
        setAddressFilter(e.target.value);
    };

    const filteredScholar = scholar.filter(scholar =>
        scholar.fullName.toLowerCase().includes(query.toLowerCase()) ||
        scholar.municipality.toLowerCase().includes(query.toLowerCase()) &&
        scholar.municipality.toLowerCase().includes(addressFilter.toLowerCase())
    );

    useEffect(() => {
        const filteredByAddress = scholar.filter(scholar =>
            scholar.municipality.toLowerCase().includes(addressFilter.toLowerCase())
        );
        setTotal(filteredByAddress.length);
    }, [addressFilter, scholar]);

    return (
        <div className="container">
            <div className="py-1">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Filter by Address..."
                        value={addressFilter}
                        onChange={handleAddressFilter}
                    />

                </div>

                <p>Total scholars: {totalScholars}</p>

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
                        {filteredScholar.map((scholar, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{scholar.fullName}</td>
                                <td>{scholar.age}</td>
                                <td>{scholar.municipality}</td>
                                <td>{scholar.school}</td>
                                <td>{scholar.course}</td>
                                <td>{scholar.yearLevel}</td>
                                <td>{scholar.contactNumber}</td>
                                <td>{scholar.emailAddress}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2 mt-2" to={`/viewscholar/${scholar.scholarId}`}>
                                        View
                                    </Link>
                                    <Link className="btn btn-outline-primary mx-2 mt-2" to={`/editscholar/${scholar.scholarId}`}>
                                        Edit
                                    </Link>
                                    <button className="btn btn-danger mx-2 mt-2" onClick={() => deleteScholar(scholar.scholarId)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div>
                    <Link className="btn btn-outline-danger mx-2 mt-2" to="/admin">
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    )
}
