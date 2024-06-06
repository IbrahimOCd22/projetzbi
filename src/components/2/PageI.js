import React, { useState } from 'react';
import { div1Style, titleStyle2, h1D, div4, input1, option1, input, lab2, lab3, button, div3, h4, buttonI, spanI } from './Style2';
import img2 from './img2/div.png';
import './cssD.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PageI() {
  const { id } = useParams(); // Retrieve cv_id from URL path

  const [employer, setEmployer] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [startDateMonth, setStartDateMonth] = useState('');
  const [startDateYear, setStartDateYear] = useState('');
  const [endDateMonth, setEndDateMonth] = useState('');
  const [endDateYear, setEndDateYear] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null); // Error state for better debugging
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      employer,
      jobtitre: jobTitle,
      startdate: `${startDateYear}-${startDateMonth}-01`,
      enddate: `${endDateYear}-${endDateMonth}-01`,
      localisation: location,
      description,
      c_v_s_id: id, // Make sure cv_id is defined and valid
    };

    console.log('Submitting form data:', formData); // Debugging log

    try {
      const response = await axios.post('http://localhost:8000/api/work', formData);
      console.log('Work experience details saved:', response.data);
      // Redirect or navigate to the next page after successful submission
      // Example: history.push('/signup/cvcandida/Education');
      navigate(`/signup/cvcandida/Education/${id}`);

    } catch (error) {
      console.error('Error saving work experience details:', error);
      setError(error.response?.data); // Set error state for better debugging
    }
  };

  const startYear = 2010;
  const endYear = 2025;
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  const months = [
    "01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12"
  ];

  return (
    <form onSubmit={handleSubmit} method='Post'>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle2} />
        <h1 style={{ ...h1D, top: "125px" }}>Create CV</h1>
        <h4 style={h4}>Work Experiences</h4>
        <div style={{ ...div4, marginTop: "200px" }}>

          <label style={{ ...lab2, top: "10px" }}>Employer :</label><br />
          <input
            type='text'
            name='employer'
            style={{ ...input, top: "30px" }}
            placeholder="Name"
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
          /><br />

          <label style={{ ...lab3, top: "60px", width: "200px", marginLeft: "3px" }}>Job Title :</label><br />
          <input
            type='text'
            name='jobTitle'
            style={{ ...input1, top: "90px" }}
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          /><br />

          <label style={{ ...lab3, top: "140px", width: "200px", marginLeft: "3px" }}>Start Date : </label><br />
          <select
            style={{ ...input1, top: "170px", color: "#fff", width: "130px" }}
            className="custom-select"
            value={startDateMonth}
            onChange={(e) => setStartDateMonth(e.target.value)}
          >
            <option style={option1} value="">Month</option>
            {months.map((month, index) => (
              <option style={option1} key={index} value={month}>{month}</option>
            ))}
          </select>
          <select
            style={{ ...input1, top: "170px", width: "130px", left: "160px" }}
            className="custom-select"
            value={startDateYear}
            onChange={(e) => setStartDateYear(e.target.value)}
          >
            <option style={option1} value="">Year</option>
            {years.map((year, index) => (
              <option style={option1} key={index} value={year}>{year}</option>
            ))}
          </select>

          <label style={{ ...lab3, top: "220px", width: "200px", marginLeft: "3px", paddingBottom: "33px" }}>End Date :</label><br />

          <select
            style={{ ...input1, top: "250px", color: "#fff", width: "130px" }}
            value={endDateMonth}
            onChange={(e) => setEndDateMonth(e.target.value)}
          >
            <option style={option1} value="">Month</option>
            {months.map((month, index) => (
              <option style={option1} key={index} value={month}>{month}</option>
            ))}
          </select><br />

          <select
            style={{ ...input1, top: "250px", width: "130px", left: "160px" }}
            value={endDateYear}
            onChange={(e) => setEndDateYear(e.target.value)}
          >
            <option style={option1} value="">Year</option>
            {years.map((year, index) => (
              <option style={option1} key={index} value={year}>{year}</option>
            ))}
          </select><br />
        </div>

        <div style={{ ...div3, marginTop: "200px" }}>

          <label style={{ ...lab2, top: "10px" }}>Location :</label><br />
          <input
            type='text'
            name='location'
            style={{ ...input, top: "30px" }}
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          /><br />

          <label style={{ ...lab3, top: "60px", width: "200px" }}>Description :</label><br />
          <textarea
            style={{ ...input1, top: "90px", width: "283px", height: "120px", resize: "none" }}
            placeholder='Describe your tasks, responsibilities and any competencies related to this work experience'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="button" style={buttonI}><span style={spanI}>+</span> add new</button>
        </div>
       <input type='submit' value={"next -->"} style={{ ...button, position: 'absolute', top: "410px", left: "940px" }} />

      </div>
      {error && <div style={{ color: 'red' }}>{JSON.stringify(error)}</div>}
    </form>
  );
}

export default PageI;
