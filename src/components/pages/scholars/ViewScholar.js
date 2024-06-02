import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ViewScholar() {
  let navigate = useNavigate();

  const [Scholar, setScholar] = useState({
    fullName: "",
    age: "",
    dateOfBirth: "",
    municipality: "",
    detailedAddress: "",
    school: "",
    gwa: "",
    course: "",
    yearLevel: "",
    contactNumber: "",
    emailAddress: "",
    emergencyContactPerson: "",
    relationshipWithEmergencyContact: "",
    nameOfMother: "",
    occupationOfMother: "",
    nameOfFather: "",
    occupationOfFather: "",
    numberOfSiblings: "",
    numberOfSiblingsStudying: "",
    numberOfSiblingsWorking: "",
    annualHouseholdIncome: "",
  });

  const {scholarId}=useParams();

    useEffect(()=>{
        loadScholar();
    }, []);

    const loadScholar=async ()=>{
        const result=await axios.get(`http://localhost:8080/scholar/${scholarId}`)
        setScholar(result.data)
    };
  return (
    <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Scholar Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of Scholar with id: {Scholar.scholarId}

                            <ul className="list-group list-goup-flush">
                                <li className="list-group-item">
                                    <b>FULL NAME:</b>
                                    {Scholar.fullName}
                                </li>
                                <li className="list-group-item">
                                    <b>AGE:</b>
                                    {Scholar.age}
                                </li>
                                <li className="list-group-item">
                                    <b>DATE OF BIRTH:</b>
                                    {Scholar.dateOfBirth}
                                </li>
                                <li className="list-group-item">
                                    <b>MUNICIPALITY:</b>
                                    {Scholar.municipality}
                                </li>
                                <li className="list-group-item">
                                    <b>DETAILED ADDRESS:</b>
                                    {Scholar.detailedAddress}
                                </li>
                                <li className="list-group-item">
                                    <b>SCHOOL:</b>
                                    {Scholar.school}
                                </li>
                                <li className="list-group-item">
                                    <b>GWA:</b>
                                    {Scholar.gwa}
                                </li>
                                <li className="list-group-item">
                                    <b>COURSE:</b>
                                    {Scholar.course}
                                </li>
                                <li className="list-group-item">
                                    <b>YEAR LEVEL:</b>
                                    {Scholar.yearLevel}
                                </li>
                                <li className="list-group-item">
                                    <b>CONTACT NUMBER:</b>
                                    {Scholar.contactNumber}
                                </li>
                                <li className="list-group-item">
                                    <b>EMAIL ADDRESS:</b>
                                    {Scholar.emailAddress}
                                </li>
                                <li className="list-group-item">
                                    <b>EMERGENCY CONTACT PERSON:</b>
                                    {Scholar.emergencyContactPerson}
                                </li>
                                <li className="list-group-item">
                                    <b>EMERGENCY CONTACT NUMBER:</b>
                                    {Scholar.relationshipWithEmergencyContact}
                                </li>
                                <li className="list-group-item">
                                    <b>NAME OF MOTHER:</b>
                                    {Scholar.nameOfMother}
                                </li>
                                <li className="list-group-item">
                                    <b>OCCUPATION OF MOTHER:</b>
                                    {Scholar.occupationOfMother}
                                </li>
                                <li className="list-group-item">
                                    <b>NAME OF FATHER:</b>
                                    {Scholar.nameOfFather}
                                </li>
                                <li className="list-group-item">
                                    <b>OCCUPATION OF FATHER:</b>
                                    {Scholar.occupationOfFather}
                                </li>
                                <li className="list-group-item">
                                    <b>NUMBER OF SIBLINGS:</b>
                                    {Scholar.numberOfSiblings}
                                </li>
                                <li className="list-group-item">
                                    <b>NUMBER OF HOUSEHOLD MEMBER STUDYING:</b>
                                    {Scholar.numberOfSiblingsStudying}
                                </li>
                                <li className="list-group-item">
                                    <b>NUMBER OF HOUSEHOLD MEMBER WORKING:</b>
                                    {Scholar.numberOfSiblingsWorking}
                                </li>
                                <li className="list-group-item">
                                    <b>ANNUAL HOUSEHOLD INCOME:</b>
                                    {Scholar.annualHouseholdIncome}
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/manageScholar"}>Back</Link>
                </div>
            </div>
        </div>
  )
}
