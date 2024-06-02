import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faCalendarCheck, faUserClock, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


export default function Admin() {
  const [scholarCount, setScholarCount] = useState([]);
  const [pendingCount, setPendingCount] = useState([])
  const [programsCount, setProgramsCount] = useState([])
  const [disbursedCount, setDisbursedCount] = useState([])
  const [waitingCount, setWaitingCount] = useState([])

  useEffect(()=>{
    loadScholarCount();
  },[])

  const loadScholarCount = async () => {
    const result = await axios.get(`http://localhost:8080/scholar/count`)
    setScholarCount(result.data);
  }

  useEffect(()=>{
    loadPendingCount();
  },[])

  const loadPendingCount = async () =>{
    const pending = await axios.get(`http://localhost:8080/pending/count`)
    setPendingCount(pending.data)
  }

  useEffect(()=>{
    loadProgramsCount();
  },[])

  const loadProgramsCount = async ()=> {
    const programs = await axios.get(`http://localhost:8080/programs/count`)
    setProgramsCount(programs.data)
  }

  useEffect(()=>{
    loadWaitingCount();
  },[])


  const loadWaitingCount = async ()=>{
    const waiting = await axios.get(`http://localhost:8080/waiting/count`)
    setWaitingCount(waiting.data)
  }

  useEffect(()=>{
    loadDisbursedCount();
  },[])


  const loadDisbursedCount = async ()=>{
    const disbursed = await axios.get(`http://localhost:8080/disbursed/count`)
    setDisbursedCount(disbursed.data)
  }

  return (
    <div className="container align-items-md-center admin">
      <div className="col main pt-5 mt-3">
        <p className="lead d-none d-sm-block text-black">Admin Dashboard</p>
        <hr className="text-secondary"/>
      </div>
      <div className="row mb-3">
        <div className="col-lg-4 col-md-6 col-sm-12 py-3">
          <div className="card text-white bg-success h-100 custom-card">
            <div className="card-body bg-success">
              <div className="rotate">
                <FontAwesomeIcon icon={faUsers} size="1x" />
              </div>
              <Link className="text-uppercase adText" to="/manageScholar">Scholars</Link>
              <p>{scholarCount}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 py-3">
          <div className="card text-white bg-danger h-100 custom-card">
            <div className="card-body bg-danger">
              <div className="rotate">
                <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
              </div>
              <Link className="text-uppercase adText" to="/waiting">Waiting for Disbursement</Link>
              <p>{waitingCount}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 py-3">
          <div className="card text-white bg-info h-100 custom-card">
            <div className="card-body bg-info">
              <div className="rotate">
                <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
              </div>
              <Link className="text-uppercase adText" to="/disbursed">Disbursed</Link>
              <p>{disbursedCount}</p>
            </div>
          </div>
        </div>
        <br/>
        <div className="col-lg-4 col-md-6 col-sm-12 py-3">
          <div className="card text-white bg-warning h-100 custom-card">
            <div className="card-body bg-warning">
              <div className="rotate">
                <FontAwesomeIcon icon={faUserClock} size="1x" />
              </div>
              <Link className="text-uppercase adText" to="/pendingScholar">Pending Applications</Link>
              <p>{pendingCount}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 py-3">
          <div className="card text-white bg-success h-100 custom-card">
            <div className="card-body bg-success">
              <div className="rotate">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" />
              </div>
              <Link className="text-uppercase adText" to="/managePrograms">Scholarship Programs</Link>
              <p>{programsCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
