import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditPending() {
  let navigate = useNavigate();

  const {pendingId} = useParams();

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
    annualHouseholdIncome_pending: ""
  });

  const {fullName_pending,
    age_pending,
    dateOfBirth_pending,
    municipality_pending,
    detailedAddress_pending,
    school_pending,
    gwa_pending,
    course_pending,
    yearLevel_pending,
    contactNumber_pending,
    emailAddress_pending,
    emergencyContactPerson_pending,
    relationshipWithEmergencyContact_pending,
    nameOfMother_pending,
    occupationOfMother_pending,
    nameOfFather_pending,
    occupationOfFather_pending,
    numberOfSiblings_pending,
    numberOfSiblingsStudying_pending,
    numberOfSiblingsWorking_pending,
    annualHouseholdIncome_pending} = pendingScholar

  const onInputChange = (e) => {
    setPendingScholar({ ...pendingScholar, [e.target.name]: e.target.value });
  };


  useEffect(()=>{
    loadPendingScholar();
}, []);

const onSubmit = async (e) => {
    alert("You are about to submit");
    e.preventDefault();
    await axios.put(`http://localhost:8080/pendingApplication/${pendingId}`, pendingScholar);
    navigate("/admin");
  };


  const loadPendingScholar = async ()=>{
    try{
      const pending  = await axios.get(`http://localhost:8080/pendingApplication/${pendingId}`)
    setPendingScholar(pending.data)
    }catch (error) {
      console.error("Error fetching data:", error);
  }
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
                    name="fullName_pending"
                    id="fullName_pending"
                    className="form-control"
                    placeholder="Name"
                    value={fullName_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Birth Date :</label>
                  <input
                    required
                    type="date"
                    name="dateOfBirth_pending"
                    id="dateOfBirth_pending"
                    className="form-control"
                    placeholder="Date of Birth"
                    value={dateOfBirth_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="detailedAddress">Detailed Address :</label>
                  <input
                    required
                    type="text"
                    name="detailedAddress_pending"
                    id="detailedAddress_pending"
                    className="form-control"
                    placeholder="Detailed Address"
                    value={detailedAddress_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emergencyContactPerson">Emergency Contact Person:</label>
                  <input
                    required
                    type="text"
                    name="emergencyContactPerson_pending"
                    id="emergencyContactPerson_pending"
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
                    name="age_pending"
                    id="age_pending"
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
                    name="municipality_pending"
                    id="municipality_pending"
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
                  <label htmlFor="contactNumber">Contact Number :</label>
                  <input
                    required
                    type="text"
                    name="contactNumber_pending"
                    id="contactNumber_pending"
                    className="form-control"
                    placeholder="Contact Number"
                    value={contactNumber_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="relationshipWithEmergencyContact">Emergecy Contact Number:  :</label>
                  <input
                    required
                    type="text"
                    name="relationshipWithEmergencyContact_pending"
                    id="relationshipWithEmergencyContact_pending"
                    className="form-control"
                    placeholder="Emergecy Contact Number"
                    value={relationshipWithEmergencyContact_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address :</label>
                  <input
                    required
                    type="email"
                    name="emailAddress_pending"
                    id="emailAddress_pending"
                    className="form-control"
                    placeholder="Email"
                    value={emailAddress_pending}
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
                    name="school_pending"
                    id="school_pending"
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
                    name="course_pending"
                    id="course_pending"
                    className="form-control"
                    placeholder="Course"
                    value={course_pending}
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
                    name="yearLevel_pending"
                    id="yearLevel_pending"
                    className="form-control"
                    placeholder="Year Level"
                    value={yearLevel_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gwa">GWA :</label>
                  <input
                    required
                    type="text"
                    name="gwa_pending"
                    id="gwa_pending"
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
                  <label htmlFor="nameOfFather">Father's Name :</label>
                  <input
                    required
                    type="text"
                    name="nameOfFather_pending"
                    id="nameOfFather_pending"
                    className="form-control"
                    placeholder="Father's Name"
                    value={nameOfFather_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nameOfMother">Mother's Name :</label>
                  <input
                    required
                    type="text"
                    name="nameOfMother_pending"
                    id="nameOfMother_pending"
                    className="form-control"
                    placeholder="Mother's Name"
                    value={nameOfMother_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numberOfSiblings" className="__hm_label">Number of Household Members :</label>
                  <input
                    required
                    type="number"
                    name="numberOfSiblings_pending"
                    id="numberOfSiblings_pending"
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
                  <label htmlFor="occupationOfFather">Father's Occupation :</label>
                  <input
                    required
                    type="text"
                    name="occupationOfFather_pending"
                    id="occupationOfFather_pending"
                    className="form-control"
                    placeholder="Father's Occupation"
                    value={occupationOfFather_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="occupationOfMother">Mother's Occupation :</label>
                  <input
                    required
                    type="text"
                    name="occupationOfMother_pending"
                    id="occupationOfMother_pending"
                    className="form-control"
                    placeholder="Mother's Occupation"
                    value={occupationOfMother_pending}
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
                    name="numberOfSiblingsStudying_pending"
                    id="numberOfSiblingsStudying_pending"
                    className="form-control"
                    min="0"
                    value={numberOfSiblingsStudying_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numberOfSiblingsWorking">Number of Household Members that are Working :</label>
                  <input
                    required
                    type="number"
                    name="numberOfSiblingsWorking_pending"
                    id="numberOfSiblingsWorking_pending"
                    className="form-control"
                    min="0"
                    value={numberOfSiblingsWorking_pending}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="annualHouseholdIncome">Annual Household Income (Net) :</label>
                  <input
                    required
                    type="number"
                    name="annualHouseholdIncome_pending"
                    id="annualHouseholdIncome_pending"
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
          <hr/>
          <div className="__button_field">
            <button type="submit" className="btn btn-success register">Save</button>
            <Link type="button" className="btn btn-danger mx-2 cancel" to="/managePending">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
