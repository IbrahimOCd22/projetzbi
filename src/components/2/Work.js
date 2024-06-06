import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { div1Style, titleStyle2, h1D, div4, input1, option1, input, lab2, lab3, button, div3, h4 } from './Style2'; 
import img2 from './img2/div.png';
import './cssD.css';

function Work() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workData, setWorkData] = useState({
    employer: '',
    jobtitre: '',
    startDateMonth: 'January',
    startDateYear: 2010,
    endDateMonth: 'January',
    endDateYear: 2010,
    localisation: '',
    description: ''
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/work/${id}`)
      .then(response => {
        const data = response.data;
        const startdate = new Date(data.startdate);
        const enddate = new Date(data.enddate);
        setWorkData({
          employer: data.employer,
          jobtitre: data.jobtitre,
          startDateMonth: startdate.toLocaleString('default', { month: 'long' }),
          startDateYear: startdate.getFullYear(),
          endDateMonth: enddate.toLocaleString('default', { month: 'long' }),
          endDateYear: enddate.getFullYear(),
          localisation: data.localisation,
          description: data.description
        });
        setIsLoaded(true);
      })
      .catch(error => {
        console.error('Error fetching work data:', error);
        setError('Error fetching work data');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedStartDate = new Date(`${workData.startDateMonth} 1, ${workData.startDateYear}`).toISOString().split('T')[0];
    const formattedEndDate = new Date(`${workData.endDateMonth} 1, ${workData.endDateYear}`).toISOString().split('T')[0];

    try {
      const response = await axios.put(`http://localhost:8000/api/work/${id}`, {
        ...workData,
        startdate: formattedStartDate,
        enddate: formattedEndDate
      });
      console.log('Work updated successfully:', response.data);
      navigate(`/login/candida/cv/edit/${id}`); // Redirect after successful update
    } catch (error) {
      console.error('Error updating work:', error);
      setError('Error updating work');
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
        <h1 style={{ ...h1D, top: "125px" }}>Edit Work Experience</h1>
        <h4 style={h4}>Work Experiences</h4>
        <div style={{ ...div4, marginTop: "200px" }}>

          <label style={{ ...lab2, top: "10px" }}>Employer :</label><br />
          <input
            type='text'
            name='employer'
            value={workData.employer}
            onChange={handleChange}
            style={{ ...input, top: "30px" }}
            placeholder="Employer"
          /><br />

          <label style={{ ...lab3, top: "60px", width: "200px", marginLeft: "3px" }}>Job Title :</label><br />
          <input
            type='text'
            name='jobtitre'
            value={workData.jobtitre}
            onChange={handleChange}
            style={{ ...input1, top: "90px" }}
            placeholder="Job Title"
          /><br />

          <label style={{ ...lab3, top: "140px", width: "200px", marginLeft: "3px" }}>Start Date : </label><br />
          <select
            name='startDateMonth'
            value={workData.startDateMonth}
            onChange={handleChange}
            style={{ ...input1, top: "170px", color: "#fff", width: "130px" }}
            className="custom-select"
          >
            {months.map((month, index) => (
              <option style={option1} key={index} value={month}>{month}</option>
            ))}
          </select>
          <select
            name='startDateYear'
            value={workData.startDateYear}
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
            name='endDateMonth'
            value={workData.endDateMonth}
            onChange={handleChange}
            style={{ ...input1, top: "250px", color: "#fff", width: "130px" }}
          >
            {months.map((month, index) => (
              <option style={option1} key={index} value={month}>{month}</option>
            ))}
          </select><br />

          <select
            name='endDateYear'
            value={workData.endDateYear}
            onChange={handleChange}
            style={{ ...input1, top: "250px", width: "130px", left: "160px" }}
          >
            {years.map((year, index) => (
              <option style={option1} key={index} value={year}>{year}</option>
            ))}
          </select><br />
        </div>

        <div style={{ ...div3, marginTop: "200px" }}>
          <label style={{ ...lab2, top: "10px" }}>Localisation :</label><br />
          <input
            type='text'
            name='localisation'
            value={workData.localisation}
            onChange={handleChange}
            style={{ ...input, top: "30px" }}
            placeholder="Localisation"
          /><br />

          <label style={{ ...lab3, top: "60px", width: "200px" }}>Description :</label><br />
          <textarea
            name='description'
            value={workData.description}
            onChange={handleChange}
            style={{ ...input1, top: "90px", width: "283px ", height: "120.035px", resize: "none" }}
            placeholder='Describe your tasks, responsibilities and any competencies related to this work experience'
          />
        </div>
        <button type="submit" style={{ ...button, position: 'absolute', top: "410px", left: "940px" }}>Edit</button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}

export default Work;
