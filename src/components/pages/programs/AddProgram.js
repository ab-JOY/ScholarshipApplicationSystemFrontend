import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function AddProgram() {
    let navigate = useNavigate();
    const { programId } = useParams();

    const [program, setProgram] = useState({
        programTitle: "",
        programDescription: "",
        programDeadline: "",
        programEligibility: "",
        programStatus: "",
        imageFilename: ""
    });

    const { programTitle, programDescription, programDeadline, programEligibility, programStatus, imageFilename } = program;

    const onInputChange = (e) => {
        setProgram({...program, [e.target.name]: e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8080/programs`, program)
        navigate("/admin");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Edit Program</h2>
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <FloatingLabel controlId="programTitle" label="Program Title">
                            <Form.Control
                                type="text"
                                name="programTitle"
                                value={program.programTitle}
                                onChange={(e) => onInputChange(e)}
                                placeholder="Program Title"
                            />
                        </FloatingLabel>
                        <br />
                        
                        <FloatingLabel controlId="programDescription" label="Description">
                            <Form.Control
                                as="textarea"
                                name="programDescription"
                                value={program.programDescription}
                                onChange={(e) => onInputChange(e)}
                                placeholder="Program Description"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="programDeadline" label="Deadline">
                            <Form.Control
                                as="textarea"
                                name="programDeadline"
                                value={program.programDeadline}
                                onChange={(e) => onInputChange(e)}
                                placeholder="Program Deadline"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="programEligibility" label="Eligibility">
                            <Form.Control
                                as="textarea"
                                name="programEligibility"
                                value={program.programEligibility}
                                onChange={(e) => onInputChange(e)}
                                placeholder="Program Eligibility"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="programStatus" label="Status">
                            <Form.Control
                                as="textarea"
                                name="programStatus"
                                value={program.programStatus}
                                onChange={(e) => onInputChange(e)}
                                placeholder="Program Status"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <br />

                        <FloatingLabel controlId="imageFilename" label="Image Filename">
                            <Form.Control
                                as="textarea"
                                name="imageFilename"
                                value={program.imageFilename}
                                onChange={(e) => onInputChange(e)}
                                placeholder="Image Filename"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <br />
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                        <Link className="btn btn-outline-danger mx-2" to="/managePrograms">
                            Cancel
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    );
}
