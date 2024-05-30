import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Programs() {

  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const response = await axios.get(`http://localhost:8080/programs`);
        setPrograms(response.data)
      } catch (error) {
        console.error("Error fetching programs", error);
      }
    }

    fetchPrograms();
  }, []);
  return (
    <div className="container" id="programs">
      <div>
        <h3>Programs</h3>
        <hr />
      </div>
      {programs.map((programs, index) => (
        <div className="row align-items-center justify-content-between" key={index}>
          <div className="col-md">
            <img src={`/image/${programs.imageFilename}`} className="img-fluid" alt="" />
          </div>
          <div className="col-md p-5">
            <h2>{programs.programTitle}</h2>
            <p className="lead">{programs.programDescription}</p>
            <p>Eligibility: {programs.programEligibility}</p>
            <p>Deadline of Application: {programs.programDeadline}</p>
            <button className="btn btn-success mx-2">Apply!</button>
          </div>
        </div>
      ))}

    </div>
  )
}
