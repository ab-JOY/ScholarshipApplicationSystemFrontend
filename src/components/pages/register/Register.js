import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();

  const [pendingScholar, setPendingScholar] = useState({
    fullName_pending: "",
    age_pending: "",
    dateOfBirth_pending: "",
    municipality_pending: "",
    detailedAddress_pending: "",
    school_pending: "",
    gwa_pending: "",
    course_pending: "",
    yearLevel_pending: "",
    contactNumber_pending: "",
    emailAddress_pending: "",
    emergencyContactPerson_pending: "",
    relationshipWithEmergencyContact_pending: "",
    nameOfMother_pending: "",
    occupationOfMother_pending: "",
    nameOfFather_pending: "",
    occupationOfFather_pending: "",
    numberOfSiblings_pending: "",
    numberOfSiblingsStudying_pending: "",
    numberOfSiblingsWorking_pending: "",
    annualHouseholdIncome_pending: "",
    userName_pending: "",
    password_pending: ""
  });

  const onInputChange = (e) => {
    setPendingScholar({ ...pendingScholar, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    alert("You are about to submit");
    e.preventDefault();
    await axios.post(`http://localhost:8080/pendingApplication`, pendingScholar);
    navigate("/");
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
                  <label htmlFor="fullName_pending">Name :</label>
                  <input
                    required
                    type="text"
                    name="fullName_pending"
                    id="fullName_pending"
                    className="form-control"
                    placeholder="Name"
                    value={pendingScholar.fullName_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth_pending">Birth Date :</label>
                  <input
                    required
                    type="date"
                    name="dateOfBirth_pending"
                    id="dateOfBirth_pending"
                    className="form-control"
                    placeholder="Date of Birth"
                    value={pendingScholar.dateOfBirth_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="detailedAddress_pending">Detailed Address :</label>
                  <input
                    required
                    type="text"
                    name="detailedAddress_pending"
                    id="detailedAddress_pending"
                    className="form-control"
                    placeholder="Detailed Address"
                    value={pendingScholar.detailedAddress_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emergencyContactPerson_pending">Emergency Contact Person:</label>
                  <input
                    required
                    type="text"
                    name="emergencyContactPerson_pending"
                    id="emergencyContactPerson_pending"
                    className="form-control"
                    placeholder="Emergency Contact"
                    value={pendingScholar.emergencyContactPerson_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="__input-field">
                <div className="form-group">
                  <label htmlFor="age_pending">Age :</label>
                  <input
                    required
                    type="number"
                    name="age_pending"
                    id="age_pending"
                    className="form-control"
                    min="15"
                    placeholder="Age"
                    value={pendingScholar.age_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="municipality_pending">Municipality :</label>
                  <select
                    required
                    name="municipality_pending"
                    id="municipality_pending"
                    className="form-control form-input select"
                    aria-label="Municipality"
                    placeholder="Municipality"
                    value={pendingScholar.municipality_pending}
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
                  <label htmlFor="contactNumber_pending">Contact Number :</label>
                  <input
                    required
                    type="text"
                    name="contactNumber_pending"
                    id="contactNumber_pending"
                    className="form-control"
                    placeholder="Contact Number"
                    value={pendingScholar.contactNumber_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="relationshipWithEmergencyContact_pending">Emergecy Contact Number:  :</label>
                  <input
                    required
                    type="text"
                    name="relationshipWithEmergencyContact_pending"
                    id="relationshipWithEmergencyContact_pending"
                    className="form-control"
                    placeholder="Emergecy Contact Number"
                    value={pendingScholar.relationshipWithEmergencyContact_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress_pending">Email Address :</label>
                  <input
                    required
                    type="email"
                    name="emailAddress_pending"
                    id="emailAddress_pending"
                    className="form-control"
                    placeholder="Email"
                    value={pendingScholar.emailAddress_pending}
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
                  <label htmlFor="school_pending">School :</label>
                  <input
                    required
                    type="text"
                    name="school_pending"
                    id="school_pending"
                    className="form-control"
                    placeholder="School"
                    value={pendingScholar.school_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="course_pending">Course :</label>
                  <input
                    required
                    type="text"
                    name="course_pending"
                    id="course_pending"
                    className="form-control"
                    placeholder="Course"
                    value={pendingScholar.course_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="__input-field">
                <div className="form-group">
                  <label htmlFor="yearLevel_pending">Year Level :</label>
                  <input
                    required
                    type="text"
                    name="yearLevel_pending"
                    id="yearLevel_pending"
                    className="form-control"
                    placeholder="Year Level"
                    value={pendingScholar.yearLevel_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gwa_pending">GWA :</label>
                  <input
                    required
                    type="text"
                    name="gwa_pending"
                    id="gwa_pending"
                    className="form-control"
                    placeholder="General Weighted Average"
                    value={pendingScholar.gwa_pending}
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
                  <label htmlFor="nameOfFather_pending">Father's Name :</label>
                  <input
                    required
                    type="text"
                    name="nameOfFather_pending"
                    id="nameOfFather_pending"
                    className="form-control"
                    placeholder="Father's Name"
                    value={pendingScholar.nameOfFather_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nameOfMother_pending">Mother's Name :</label>
                  <input
                    required
                    type="text"
                    name="nameOfMother_pending"
                    id="nameOfMother_pending"
                    className="form-control"
                    placeholder="Mother's Name"
                    value={pendingScholar.nameOfMother_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numberOfSiblings_pending" className="__hm_label">Number of Household Members :</label>
                  <input
                    required
                    type="number"
                    name="numberOfSiblings_pending"
                    id="numberOfSiblings_pending"
                    className="form-control __hm_input"
                    min="0"
                    placeholder="Number of Household Members"
                    value={pendingScholar.numberOfSiblings_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="__input-field">
                <div className="form-group">
                  <label htmlFor="occupationOfFather_pending">Father's Occupation :</label>
                  <input
                    required
                    type="text"
                    name="occupationOfFather_pending"
                    id="occupationOfFather_pending"
                    className="form-control"
                    placeholder="Father's Occupation"
                    value={pendingScholar.occupationOfFather_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="occupationOfMother_pending">Mother's Occupation :</label>
                  <input
                    required
                    type="text"
                    name="occupationOfMother_pending"
                    id="occupationOfMother_pending"
                    className="form-control"
                    placeholder="Mother's Occupation"
                    value={pendingScholar.occupationOfMother_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="__input-field item-3">
                <div className="form-group">
                  <label htmlFor="numberOfSiblingsStudying_pending">Number of Household Members that are Studying :</label>
                  <input
                    required
                    type="number"
                    name="numberOfSiblingsStudying_pending"
                    id="numberOfSiblingsStudying_pending"
                    className="form-control"
                    min="0"
                    value={pendingScholar.numberOfSiblingsStudying_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numberOfSiblingsWorking_pending">Number of Household Members that are Working :</label>
                  <input
                    required
                    type="number"
                    name="numberOfSiblingsWorking_pending"
                    id="numberOfSiblingsWorking_pending"
                    className="form-control"
                    min="0"
                    value={pendingScholar.numberOfSiblingsWorking_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="annualHouseholdIncome_pending">Annual Household Income (Net) :</label>
                  <input
                    required
                    type="number"
                    name="annualHouseholdIncome_pending"
                    id="annualHouseholdIncome_pending"
                    className="form-control"
                    min="0"
                    placeholder="Annual Income"
                    value={pendingScholar.annualHouseholdIncome_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="__button_field">
            <button type="submit" className="btn btn-success register">Register</button>
            <Link type="button" className="btn btn-danger mx-2 cancel" to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
