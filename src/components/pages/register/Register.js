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
  })

  const { fullName_pending, age_pending, dateOfBirth_pending, municipality_pending, detailedAddress_pending, school_pending,
    gwa_pending, course_pending, yearLevel_pending, contactNumber_pending, emailAddress_pending, emergencyContactPerson_pending, relationshipWithEmergencyContact_pending,
    nameOfFather_pending, nameOfMother_pending, occupationOfFather_pending, occupationOfMother_pending, numberOfSiblings_pending, numberOfSiblingsStudying_pending, numberOfSiblingsWorking_pending,
    annualHouseholdIncome_pending, userName_pending, password_pending
  } = pendingScholar

  const onInputChange = (e) => {
    setPendingScholar({...pendingScholar, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e) => {
    alert("you are about to submit")
      e.preventDefault();
      await axios.post(`http://localhost:8080/pendingApplication`, pendingScholar)
      navigate("/");
  }
  return (
    <section>
      <div className="container align-items-center justify-content-between">
        <div className="__main_container form border rounded p-4 mt-2 shadow">
          <h1>Register Form</h1>
          <form className="__container" onSubmit={(e)=> onSubmit(e)}>
            <div className="__personal_info">
              <p className="small-font">NOTE: Put N/A in fields that are not applicable</p>
              <h3>Personal Information</h3>
              <hr />
              <div className="__personal_container">
                <div className="__input-field">
                  <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      value={fullName_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthDate">Birth Date :</label>
                    <input
                      required
                      type="date"
                      name="birthDate"
                      id="birthDate"
                      className="form-control"
                      placeholder="date of birth"
                      value={dateOfBirth_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="detailAdd">Detailed Address :</label>
                    <input
                      required
                      type="text"
                      name="detailAdd"
                      id="detailAdd"
                      className="form-control"
                      placeholder="Detailed Address"
                      value={detailedAddress_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emergencyCon">Emergency Contact Person:</label>
                    <input
                      required
                      type="text"
                      name="emergencyCon"
                      id="emergencyCon"
                      className="form-control"
                      placeholder="Emergency Contact"
                      value={emergencyContactPerson_pending}
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
                      value={age_pending}
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
                      value={municipality_pending}
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
                    <label htmlFor="contact">Contact Number :</label>
                    <input
                      required
                      type="text"
                      name="contact"
                      id="contact"
                      className="form-control"
                      placeholder="Contact Number"
                      value={contactNumber_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="relation">Relationship with Contact Person :</label>
                    <input
                      required
                      type="text"
                      name="relation"
                      id="relation"
                      className="form-control"
                      placeholder="Relation with Contact Person"
                      value={relationshipWithEmergencyContact_pending}
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
                      value={school_pending}
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
                      value={course_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="__input-field">
                  <div className="form-group">
                    <label htmlFor="yearLvl">Year Level :</label>
                    <input
                      required
                      type="text"
                      name="yearLvl"
                      id="yearLvl"
                      className="form-control"
                      placeholder="Year Level"
                      value={yearLevel_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="GWA">GWA :</label>
                    <input
                      required
                      type="text"
                      name="GWA"
                      id="GWA"
                      className="form-control"
                      placeholder="General Weighted Average"
                      value={gwa_pending}
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
                    <label htmlFor="fatherName">Father's Name :</label>
                    <input
                      required
                      type="text"
                      name="fatherName"
                      id="fatherName"
                      className="form-control"
                      placeholder="Father's Name"
                      value={nameOfFather_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="motherName">Mother's Name :</label>
                    <input
                      required
                      type="text"
                      name="motherName"
                      id="motherName"
                      className="form-control"
                      placeholder="Mother's Name"
                      value={nameOfMother_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="numberHM" className="__hm_label">Number of Household Members :</label>
                    <input
                      required
                      type="number"
                      name="numberHM"
                      id="numberHM"
                      className="form-control __hm_input"
                      min="0"
                      placeholder="Number of Household Members"
                      value={numberOfSiblings_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="__input-field">
                  <div className="form-group">
                    <label htmlFor="fatherOccupation">Father's Occupation :</label>
                    <input
                      required
                      type="text"
                      name="fatherOccupation"
                      id="fatherOccupation"
                      className="form-control"
                      placeholder="Father's Occupation"
                      value={occupationOfFather_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="motherOccupation">Mother's Occupation :</label>
                    <input
                      required
                      type="text"
                      name="motherOccupation"
                      id="motherOccupation"
                      className="form-control"
                      placeholder="Mother's Occupation"
                      value={occupationOfMother_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="__input-field item-3">
                  <div className="form-group">
                    <label htmlFor="studying">Number of Household Members that are Studying :</label>
                    <input
                      required
                      type="number"
                      name="studying"
                      id="studying"
                      className="form-control"
                      min="0"
                      value={numberOfSiblingsStudying_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="working">Number of Household Members that are Working :</label>
                    <input
                      required
                      type="number"
                      name="working"
                      id="working"
                      className="form-control"
                      min="0"
                      value={numberOfSiblingsWorking_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="incomeNet">Annual Household Income (Net) :</label>
                    <input
                      required
                      type="number"
                      name="incomeNet"
                      id="incomeNet"
                      className="form-control"
                      min="0"
                      placeholder="Annual Income"
                      value={annualHouseholdIncome_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="__account_info">
              <h3>Account Information</h3>
              <hr />
              <div className="__account_container">
                <div className="__input-field">
                  <div className="form-group">
                    <label htmlFor="email">Email Address :</label>
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      value={emailAddress_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username :</label>
                    <input
                      required
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      placeholder="Username"
                      value={userName_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password :</label>
                    <input
                      required
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      value={password_pending}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="__button_field">
              <button type="submit" className="btn btn-success register">Register</button>
              <Link
                type="button"
                className="btn btn-danger mx-2 cancel"
                to="/"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
