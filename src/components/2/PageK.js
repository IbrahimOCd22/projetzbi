import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { div1Style, titleStyle2, h1D, div4, input1, option1, buttonI, h4, lab3, button, div3, spanI } from './Style2';
import img2 from './img2/div.png';
import './cssD.css';

function PageK() {
  const { id } = useParams(); // Retrieve id from URL path
  const navigate = useNavigate(); // Initialize useNavigate

  const [language, setLanguage] = useState('');
  const [languageLevel, setLanguageLevel] = useState('');
  const [expertise, setExpertise] = useState('');
  const [expertiseLevel, setExpertiseLevel] = useState('');

  useEffect(() => {
    console.log('CV ID from URL:', id); // Log the id to ensure it's being retrieved
  }, [id]);

  const handleLanguageSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      languages: language,
      level: languageLevel,
      c_v_s_id: id // Ensure id is correctly defined
    };

    console.log('Language Form Data:', formData); // Log the form data to inspect it

    try {
      const response = await axios.post('http://localhost:8000/api/Language', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Language details saved:', response.data);
      // Reset form fields
      setLanguage('');
      setLanguageLevel('');   
         navigate(`/login/candida/Profile/${id}`);

      
    } catch (error) {
      if (error.response) {
        console.error('Error saving language details:', error.response.data);
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        console.error('Error saving language details:', error.message);
      }
    }
  };

  const handleExpertiseSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      expertise,
      level: expertiseLevel,
      c_v_s_id: id // Ensure id is correctly defined
    };

    console.log('Expertise Form Data:', formData); // Log the form data to inspect it

    try {
      const response = await axios.post('http://localhost:8000/api/Expertise', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Expertise details saved:', response.data);
      // Reset form fields
      setExpertise('');
      setExpertiseLevel('');
    } catch (error) {
      if (error.response) {
        console.error('Error saving expertise details:', error.response.data);
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        console.error('Error saving expertise details:', error.message);
      }
    }
  };

  return (
    <div style={div1Style}>
      <img src={img2} alt='error' style={titleStyle2} />
      <h1 style={{ ...h1D, top: "125px" }}>Create CV</h1>

      <form onSubmit={handleLanguageSubmit}>
        <div style={{ ...div4, marginTop: "110px" }}>
          <h4 style={{ ...h4, left: "80px", top: "120px" }}>Languages </h4>
          <label style={{ ...lab3, top: "140px", width: "200px", marginLeft: "3px" }}>Language : </label><br />
          <input 
            type='text' 
            name='language' 
            style={{ ...input1, top: "170px" }} 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          /><br />

          <label style={{ ...lab3, top: "220px", width: "200px", marginLeft: "3px", paddingBottom: "33px" }}>Level :</label><br />
          <select 
            name='languageLevel' 
            style={{ ...input1, top: "250px", color: "#fff" }} 
            value={languageLevel}
            onChange={(e) => setLanguageLevel(e.target.value)}
          >
            <option style={option1} value="Beginner">Beginner </option>
            <option style={option1} value="Intermediate">Intermediate </option>
            <option style={option1} value="Advanced">Advanced </option>
          </select><br />
          <button type='submit' style={{ ...buttonI, left: "110px", top: "350px" }}><span style={spanI}>+</span> add new</button>
        </div>
      </form>

      <form onSubmit={handleExpertiseSubmit}>
        <div style={{ ...div3, marginTop: "110px" }}>
          <h4 style={{ ...h4, left: "80px", top: "120px" }}>EXPERTISE </h4>

          <label style={{ ...lab3, top: "140px", width: "200px", marginLeft: "3px" }}>EXPERTISE : </label><br />
          <input 
            type='text' 
            name='expertise' 
            style={{ ...input1, top: "170px" }} 
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          /><br />

          <label style={{ ...lab3, top: "220px", width: "200px", marginLeft: "3px", paddingBottom: "33px" }}>Level :</label><br />
          <select 
            name='expertiseLevel' 
            style={{ ...input1, top: "250px", color: "#fff" }} 
            value={expertiseLevel}
            onChange={(e) => setExpertiseLevel(e.target.value)}
          >
            <option style={option1} value="Beginner">Beginner </option>
            <option style={option1} value="Intermediate">Intermediate </option>
            <option style={option1} value="Advanced">Advanced </option>
          </select><br />
          <button type='submit' style={{ ...buttonI, left: "110px", top: "350px" }}><span style={spanI}>+</span> add new</button>
        </div>
      </form>

      <button style={{ ...button, position: 'absolute', top: "440px", left: "970px" }}>Next </button>
    </div>
  );
}

export default PageK;