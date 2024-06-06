import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { div1Style, titleStyle2, h1D, div4, input1, option1, input, lab2, lab3, button, div3, h4, buttonI, spanI } from './Style2';
import img2 from './img2/div.png';
import './cssD.css';

function PageJ() {
  const { id } = useParams(); // Retrieve id from URL path
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    console.log('CV ID from URL:', id); // Log the id to ensure it's being retrieved
  }, [id]);

  const [school, setSchool] = useState('');
  const [subject, setSubject] = useState('');
  const [startDateMonth, setStartDateMonth] = useState('');
  const [startDateYear, setStartDateYear] = useState('');
  const [endDateMonth, setEndDateMonth] = useState('');
  const [endDateYear, setEndDateYear] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const startDate = `${startDateYear}-${startDateMonth}-01`;
    const endDate = `${endDateYear}-${endDateMonth}-01`;

    const formData = {
      school,
      subje: subject,
      startdate: startDate,
      enddate: endDate,
      description,
      c_v_s_id: id // Ensure id is correctly defined
    };

    console.log('Form Data:', formData); // Log the form data to inspect it

    try {
      const response = await axios.post('http://localhost:8000/api/education', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Education details saved:', response.data);
      navigate(`/signup/cvcandida/autre/${id}`);
      // Redirect or navigate to the next page after successful submission
    } catch (error) {
      if (error.response) {
        console.error('Error saving education details:', error.response.data);
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        console.error('Error saving education details:', error.message);
      }
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
    { name: "January", value: "01" }, { name: "February", value: "02" }, 
    { name: "March", value: "03" }, { name: "April", value: "04" }, 
    { name: "May", value: "05" }, { name: "June", value: "06" }, 
    { name: "July", value: "07" }, { name: "August", value: "08" }, 
    { name: "September", value: "09" }, { name: "October", value: "10" }, 
    { name: "November", value: "11" }, { name: "December", value: "12" }
  ];

  return (
    <form onSubmit={handleSubmit} method='Post'>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle2} />
        <h1 style={{ ...h1D, top: "125px" }}>Create CV</h1>
        <h4 style={h4}>Education Details</h4>
        <div style={{ ...div4, marginTop: "200px", }}>

          <label style={{ ...lab2, top: "10px" }}>School :</label><br />
          <input 
            type='text' 
            name='school' 
            style={{ ...input, top: "30px" }} 
            placeholder="Name" 
            value={school} 
            onChange={(e) => setSchool(e.target.value)} 
          /><br />

          <label style={{ ...lab3, top: "60px", width: "200px", marginLeft: "3px" }}>Subject :</label><br />
          <input 
            type='text' 
            name='subject' 
            style={{ ...input1, top: "90px" }} 
            placeholder="Subject" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
          /><br />

          <label style={{ ...lab3, top: "140px", width: "200px", marginLeft: "3px" }}>Start Date : </label><br />
          <select 
            style={{ ...input1, top: "170px", color: "#fff", width: "130px" }} 
            className="custom-select" 
            value={startDateMonth} 
            onChange={(e) => setStartDateMonth(e.target.value)}
          >
            {months.map((month, index) => (
              <option style={option1} key={index} value={month.value}>{month.name}</option>
            ))}
          </select>
          <select 
            style={{ ...input1, top: "170px", width: "130px", left: "160px" }} 
            className="custom-select" 
            value={startDateYear} 
            onChange={(e) => setStartDateYear(e.target.value)}
          >
            {years.map((year, index) => (
              <option style={option1} key={index} value={year}>{year}</option>
            ))}
          </select>

          <label style={{ ...lab3, top: "220px", width: "200px", marginLeft: "3px", paddingBottom: "33px" }}>End Date :</label><br />

          <select 
            name='endDateMonth' 
            style={{ ...input1, top: "250px", color: "#fff", width: "130px" }} 
            value={endDateMonth} 
            onChange={(e) => setEndDateMonth(e.target.value)}
          >
            {months.map((month, index) => (
              <option style={option1} key={index} value={month.value}>{month.name}</option>
            ))}
          </select><br />

          <select 
            name='endDateYear' 
            style={{ ...input1, top: "250px", width: "130px", left: "160px" }} 
            value={endDateYear} 
            onChange={(e) => setEndDateYear(e.target.value)}
          >
            {years.map((year, index) => (
              <option style={option1} key={index} value={year}>{year}</option>
            ))}
          </select><br />
        </div>

        <div style={{ ...div3, marginTop: "200px", }}>

          <label style={{ ...lab2, top: "10px", width: "200px", }}>Description :</label><br />
          <textarea 
            style={{ ...input, top: "30px", width: "293px ", height: "120px", resize: "none" }} 
            placeholder='Describe your tasks, responsibilities and any competencies related to this education'
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <button style={buttonI}><span style={spanI}>+</span> add new</button>
        </div>
        <input 
          type='submit' 
          value={"next -->"} 
          style={{ ...button, position: 'absolute', top: "410px", left: "940px" }} 
        />

      </div>
    </form>
  );
}

export default PageJ;
