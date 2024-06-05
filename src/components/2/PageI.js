import React, { useState } from 'react';
import { div1Style, titleStyle2, h1D, div4, input1, option1, input, lab2, lab3, button, div3, h4, buttonI, spanI } from './Style2';
import img2 from './img2/div.png';
import './cssD.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function PageI() {
  const { cv_id } = useParams(); // Retrieve cv_id from URL path

  const [employer, setEmployer] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [startDateMonth, setStartDateMonth] = useState('');
  const [startDateYear, setStartDateYear] = useState('');
  const [endDateMonth, setEndDateMonth] = useState('');
  const [endDateYear, setEndDateYear] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('employer', employer);
    formData.append('jobtitre', jobTitle);
    formData.append('startdate', `${startDateMonth} ${startDateYear}`);
    formData.append('enddate', `${endDateMonth} ${endDateYear}`);
    formData.append('localisation', location);
    formData.append('description', description);
    formData.append('c_v_s_id', cv_id); // Make sure cv_id is defined and valid
  
    try {
      const response = await axios.post('http://localhost:8000/api/work', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Work experience details saved:', response.data);
      // Redirect or navigate to the next page after successful submission
      // Example: history.push('/signup/cvcandida/Education');
    } catch (error) {
      console.error('Error saving work experience details:', error);
      // Handle error if needed
    }
  };
  
  

  const startYear = 2010;
  const endYear = 2025;
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
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
            <option style={option1}>Month</option>
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
            <option style={option1}>Year</option>
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
            <option style={option1}>Month</option>
            {months.map((month, index) => (
              <option style={option1} key={index} value={month}>{month}</option>
            ))}
          </select><br />

          <select
            style={{ ...input1, top: "250px", width: "130px", left: "160px" }}
            value={endDateYear}
            onChange={(e) => setEndDateYear(e.target.value)}
          >
            <option style={option1}>Year</option>
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
          <button style={buttonI}><span style={spanI}>+</span> add new</button>
        </div>
       <input type='submit' value={"next -->"} style={{ ...button, position: 'absolute', top: "410px", left: "940px" }} />

      </div>
    </form>
  );
}

export default PageI;
