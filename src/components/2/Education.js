import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { div1Style, titleStyle2, h1D, div4, input1, option1, input, lab2, lab3, button, div3, h4 } from './Style2'; 
import img2 from './img2/div.png';
import './cssD.css';

function Education() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [educationData, setEducationData] = useState({
    school: '',
    subje: '', // Fixed the typo from jubje to subje
    startMonth: 'January',
    startYear: 2010,
    endMonth: 'January',
    endYear: 2010,
    description: ''
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/education/${id}`)
      .then(response => {
        const data = response.data;
        setEducationData({
          school: data.school || '',
          subje: data.subje || '',
          startMonth: data.startMonth || 'January',
          startYear: data.startYear || 2010,
          endMonth: data.endMonth || 'January',
          endYear: data.endYear || 2010,
          description: data.description || ''
        });
        setIsLoaded(true);
      })
      .catch(error => {
        console.error('Error fetching education data:', error);
        setError('Error fetching education data');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8000/api/education/${id}`, educationData);
      console.log('Education updated successfully:', response.data);
      navigate(`/login/candida/cv/edit/${id}`); // Redirect after successful update
    } catch (error) {
      console.error('Error updating education:', error);
      setError('Error updating education');
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

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle2} />
        <h1 style={{ ...h1D, top: "125px" }}>Edit Education</h1>
        <h4 style={h4}>Education Details</h4>
        <div style={{ ...div4, marginTop: "200px" }}>

          <label style={{ ...lab2, top: "10px" }}>School :</label><br />
          <input
            type='text'
            name='school'
            value={educationData.school}
            onChange={handleChange}
            style={{ ...input, top: "30px" }}
            placeholder="School"
          /><br />

          <label style={{ ...lab3, top: "60px", width: "200px", marginLeft: "3px" }}>Subject :</label><br />
          <input
            type='text'
            name='subje'
            value={educationData.subje}
            onChange={handleChange}
            style={{ ...input1, top: "90px" }}
            placeholder="Subject"
          /><br />

          <label style={{ ...lab3, top: "140px", width: "200px", marginLeft: "3px" }}>Start Date : </label><br />
          <select
            name='startMonth'
            value={educationData.startMonth}
            onChange={handleChange}
            style={{ ...input1, top: "170px", color: "#fff", width: "130px" }}
            className="custom-select"
          >
            {months.map((month, index) => (
              <option style={option1} key={index} value={month}>{month}</option>
            ))}
          </select>
          <select
            name='startYear'
            value={educationData.startYear}
            onChange={handleChange}
            style={{ ...input1, top: "170px", width: "130px", left: "160px" }}
            className="custom-select"
          >
            {years.map((year, index) => (
              <option style={option1} key={index} value={year}>{year}</option>
            ))}
          </select>
          <label style={{ ...lab3, top: "220px", width: "200px", marginLeft: "3px", paddingBottom: "33px" }}>End Date :</label><br />

          <select
            name='endMonth'
            value={educationData.endMonth}
            onChange={handleChange}
            style={{ ...input1, top: "250px", color: "#fff", width: "130px" }}
          >
            {months.map((month, index) => (
              <option style={option1} key={index} value={month}>{month}</option>
            ))}
          </select><br />

          <select
            name='endYear'
            value={educationData.endYear}
            onChange={handleChange}
            style={{ ...input1, top: "250px", width: "130px", left: "160px" }}
          >
            {years.map((year, index) => (
              <option style={option1} key={index} value={year}>{year}</option>
            ))}
          </select><br />
        </div>

        <div style={{ ...div3, marginTop: "200px" }}>

          <label style={{ ...lab2, top: "10px", width: "200px" }}>Description :</label><br />
          <textarea
            name='description'
            value={educationData.description}
            onChange={handleChange}
            style={{ ...input, top: "30px", width: "293px", height: "120px", resize: "none" }}
            placeholder='Describe your tasks, responsibilities and any competencies related to this education'
          />
        </div>
        <button type="submit" style={{ ...button, position: 'absolute', top: "410px", left: "940px" }}>Edit</button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}

export default Education;
