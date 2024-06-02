import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddScholar() {
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
    annualHouseholdIncome: ""
  });

  const onInputChange = (e) => {
    setScholar({ ...Scholar, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    alert("You are about to submit");
    e.preventDefault();
    await axios.post(`http://localhost:8080/newscholar`, Scholar);
    navigate("/admin");
  };

  return (
    <div className="container align-items-center justify-content-between">
      <div className="__main_container form border rounded p-4 mt-2 shadow">
        <h1>Register Form</h1>
        <form className="__container" onSubmit={(e) => onSubmit(e)}>
          <div className="__personal_info">
            <p className="small-font">NOTE: Put N/A in fields that are not applicable</p>
            <h3>Personal Information</h3>
            <hr />
            <div className="__personal_container">
              <div className="__input-field">
                <div className="form-group">
                  <label htmlFor="fullName">Name :</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="form-control"
                    placeholder="Name"
                    value={Scholar.fullName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Birth Date :</label>
                  <input
                    required
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className="form-control"
                    placeholder="Date of Birth"
                    value={Scholar.dateOfBirth}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="detailedAddress">Detailed Address :</label>
                  <input
                    required
                    type="text"
                    name="detailedAddress"
                    id="detailedAddress"
                    className="form-control"
                    placeholder="Detailed Address"
                    value={Scholar.detailedAddress}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emergencyContactPerson">Emergency Contact Person:</label>
                  <input
                    required
                    type="text"
                    name="emergencyContactPerson"
                    id="emergencyContactPerson"
                    className="form-control"
                    placeholder="Emergency Contact"
                    value={Scholar.emergencyContactPerson}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="__input-field">
                <div className="form-group">
                  <label htmlFor="age">Age :</label>
                  <input
                    required
                    type="number"
                    name="age"
                    id="age"
                    className="form-control"
                    min="15"
                    placeholder="Age"
                    value={Scholar.age}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="municipality">Municipality :</label>
                  <select
                    required
                    name="municipality"
                    id="municipality"
                    className="form-control form-input select"
                    aria-label="Municipality"
                    placeholder="Municipality"
                    value={Scholar.municipality}
                    onChange={(e) => onInputChange(e)}
                  >
                    <option value="" disabled>
                      Select municipality
                    </option>
                    <option value="Subic">Subic</option>
                    <option value="Castillejos">Castillejos</option>
                    <option value="San Antonio">San Antonio</option>
                    <option value="San Marcelino">San Marcelino</option>
                    <option value="San Narciso">San Narciso</option>
                    <option value="San Felipe">San Felipe</option>
                    <option value="Cabangan">Cabangan</option>
                    <option value="Botolan">Botolan</option>
                    <option value="Iba">Iba</option>
                    <option value="Palauig">Palauig</option>
                    <option value="Candelaria">Candelaria</option>
                    <option value="Masinloc">Masinloc</option>
                    <option value="Sta. Cruz">Sta. Cruz</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number :</label>
                  <input
                    required
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    className="form-control"
                    placeholder="Contact Number"
                    value={Scholar.contactNumber}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="relationshipWithEmergencyContact">Emergecy Contact Number:  :</label>
                  <input
                    required
                    type="text"
                    name="relationshipWithEmergencyContact"
                    id="relationshipWithEmergencyContact"
                    className="form-control"
                    placeholder="Emergecy Contact Number"
                    value={Scholar.relationshipWithEmergencyContact}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address :</label>
                  <input
                    required
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    className="form-control"
                    placeholder="Email"
                    value={Scholar.emailAddress}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="__education_info">
            <h3>Education Information</h3>
            <hr />
            <div className="__education_container">
              <div className="__input-field">
                <div className="form-group">
                  <label htmlFor="school">School :</label>
                  <input
                    required
                    type="text"
                    name="school"
                    id="school"
                    className="form-control"
                    placeholder="School"
                    value={Scholar.school}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="course">Course :</label>
                  <input
                    required
                    type="text"
                    name="course"
                    id="course"
                    className="form-control"
                    placeholder="Course"
                    value={Scholar.course}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="__input-field">
                <div className="form-group">
                  <label htmlFor="yearLevel">Year Level :</label>
                  <input
                    required
                    type="text"
                    name="yearLevel"
                    id="yearLevel"
                    className="form-control"
                    placeholder="Year Level"
                    value={Scholar.yearLevel}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gwa">GWA :</label>
                  <input
                    required
                    type="text"
                    name="gwa"
                    id="gwa"
                    className="form-control"
                    placeholder="General Weighted Average"
                    value={Scholar.gwa}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="__family_info">
            <h3>Family Information</h3>
            <hr />
            <div className="__family_container">
              <div className="__input-field">
                <div className="form-group">
                  <label htmlFor="nameOfFather">Father's Name :</label>
                  <input
                    required
                    type="text"
                    name="nameOfFather"
                    id="nameOfFather"
                    className="form-control"
                    placeholder="Father's Name"
                    value={Scholar.nameOfFather}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nameOfMother">Mother's Name :</label>
                  <input
                    required
                    type="text"
                    name="nameOfMother"
                    id="nameOfMother"
                    className="form-control"
                    placeholder="Mother's Name"
                    value={Scholar.nameOfMother}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numberOfSiblings" className="__hm_label">Number of Household Members :</label>
                  <input
                    required
                    type="number"
                    name="numberOfSiblings"
                    id="numberOfSiblings"
                    className="form-control __hm_input"
                    min="0"
                    placeholder="Number of Household Members"
                    value={Scholar.numberOfSiblings}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="__input-field">
                <div className="form-group">
                  <label htmlFor="occupationOfFather">Father's Occupation :</label>
                  <input
                    required
                    type="text"
                    name="occupationOfFather"
                    id="occupationOfFather"
                    className="form-control"
                    placeholder="Father's Occupation"
                    value={Scholar.occupationOfFather}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="occupationOfMother">Mother's Occupation :</label>
                  <input
                    required
                    type="text"
                    name="occupationOfMother"
                    id="occupationOfMother"
                    className="form-control"
                    placeholder="Mother's Occupation"
                    value={Scholar.occupationOfMother}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="__input-field item-3">
                <div className="form-group">
                  <label htmlFor="numberOfSiblingsStudying">Number of Household Members that are Studying :</label>
                  <input
                    required
                    type="number"
                    name="numberOfSiblingsStudying"
                    id="numberOfSiblingsStudying"
                    className="form-control"
                    min="0"
                    value={Scholar.numberOfSiblingsStudying}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numberOfSiblingsWorking">Number of Household Members that are Working :</label>
                  <input
                    required
                    type="number"
                    name="numberOfSiblingsWorking"
                    id="numberOfSiblingsWorking"
                    className="form-control"
                    min="0"
                    value={Scholar.numberOfSiblingsWorking}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="annualHouseholdIncome">Annual Household Income (Net) :</label>
                  <input
                    required
                    type="number"
                    name="annualHouseholdIncome"
                    id="annualHouseholdIncome"
                    className="form-control"
                    min="0"
                    placeholder="Annual Income"
                    value={Scholar.annualHouseholdIncome}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="__button_field">
            <button type="submit" className="btn btn-success register">Register</button>
            <Link type="button" className="btn btn-danger mx-2 cancel" to="/admin">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
