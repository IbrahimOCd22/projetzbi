import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { div1Style, titleStyle2, h1D, div4, input1, option1, buttonI, h4, lab3, button, div3, spanI } from './Style2';
import img2 from './img2/div.png';
import './cssD.css';

function Lang() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [langData, setLangData] = useState({
    languages: '',
    level: 'Beginner'
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Language/${id}`)
      .then(response => {
        const data = response.data;
        setLangData({
          languages: data.languages,
          level: data.level
        });
      })
      .catch(error => {
        console.error('Error fetching languages data:', error);
        setError('Error fetching languages data');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLangData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8000/api/Language/${id}`, langData);
      console.log('Languages updated successfully:', response.data);
      navigate(`/login/candida/cv/edit/${id}`); // Redirect after successful update
    } catch (error) {
      console.error('Error updating languages:', error);
      setError('Error updating languages');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle2} />
        <h1 style={{ ...h1D, top: "125px" }}>Edit Languages</h1>

        <div style={{ ...div4, marginTop: "110px", marginLeft: "730px" }}>
          <h4 style={{ ...h4, left: "80px", top: "120px" }}>Languagess </h4>
          <label style={{ ...lab3, top: "140px", width: "200px", marginLeft: "3px" }}>Languages : </label><br />
          <input
            type='text'
            name='languages'
            value={langData.languages}
            onChange={handleChange}
            style={{ ...input1, top: "170px" }}
          /><br />

          <label style={{ ...lab3, top: "220px", width: "200px", marginLeft: "3px", paddingBottom: "33px" }}>Level :</label><br />
          <select
            name='level'
            value={langData.level}
            onChange={handleChange}
            style={{ ...input1, top: "250px", color: "#fff" }}
          >
            <option style={option1} value="Beginner">Beginner</option>
            <option style={option1} value="Intermediate">Intermediate</option>
            <option style={option1} value="Advanced">Advanced</option>
          </select><br />
        </div>

        <button type="submit" style={{ ...button, position: 'absolute', top: "400px", left: "730px" }}>Edit</button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}

export default Lang;
