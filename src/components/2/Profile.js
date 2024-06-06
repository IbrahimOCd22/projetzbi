import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { div1Style, titleStyle2, h1D, div4, input1, option1, input, lab2, lab3, button, div3 } from './Style2';
import img2 from './img2/div.png';
import './cssD.css';

function Profile() {
  const { id } = useParams();
  const [cvData, setCvData] = useState({
    nom: '',
    email: '',
    phone: '',
    catagorie: '',
    adress: '',
    profile: '',
    photo: ''
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/CV/${id}`)
      .then(response => {
        setCvData(response.data);
        setIsLoaded(true);
      })
      .catch(error => {
        console.error('Error fetching CV data:', error);
        setError('Error fetching CV data');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setCvData(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in cvData) {
      formData.append(key, cvData[key]);
    }

    try {
      const response = await axios.post(`http://localhost:8000/api/CV/${id}?_method=PUT`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('CV updated successfully:', response.data);
      navigate(`/login/candida/cv/edit/${id}`); // Redirect after successful update

    } catch (error) {
      console.error('Error updating CV:', error);
      setError('Error updating CV');
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle2} />
        <h1 style={{ ...h1D, top: "125px" }}>Edit CV</h1>

        <div style={{ ...div4, marginTop: "185px" }}>
          <label style={{ ...lab2, top: "10px" }}>Name :</label><br />
          <input
            type='text'
            name='nom'
            value={cvData.nom}
            onChange={handleChange}
            style={{ ...input, top: "30px" }}
            placeholder="Name"
          /><br />

          <label style={{ ...lab3, top: "60px", width: "200px", marginLeft: "3px" }}>Email :</label><br />
          <input
            type='email'
            name='email'
            value={cvData.email}
            onChange={handleChange}
            style={{ ...input1, top: "90px" }}
            placeholder="user@email.com"
          /><br />

          <label style={{ ...lab3, top: "140px", width: "200px", marginLeft: "3px" }}>Phone :</label><br />
          <input
            type='text'
            name='phone'
            value={cvData.phone}
            onChange={handleChange}
            style={{ ...input1, top: "170px" }}
            placeholder="Phone"
          /><br />

          <label style={{ ...lab3, top: "220px", width: "200px", marginLeft: "3px", paddingBottom: "33px" }}>Choose Categories :</label><br />
          <select
            name='catagorie'
            value={cvData.catagorie}
            onChange={handleChange}
            style={{ ...input1, top: "250px", color: "#fff" }}>
            <option style={option1}>Categories</option>
            <option style={option1} value="Marketing & Communication">Marketing & Communication</option>
            <option style={option1} value="Finance Management">Finance Management</option>
            <option style={option1} value="UI / UX Design">UI / UX Design</option>
            <option style={option1} value="Project Management">Project Management</option>
            <option style={option1} value="Business & Consulting">Business & Consulting</option>
            <option style={option1} value="Graphic Designer">Graphic Designer</option>
            <option style={option1} value="Web Development">Web Development</option>
            <option style={option1} value="Video Editor">Video Editor</option>
          </select><br />
        </div>

        <div style={{ ...div3, marginTop: "185px" }}>
          <label style={{ ...lab2, top: "10px" }}>Address :</label><br />
          <input
            type='text'
            name='adress'
            value={cvData.adress}
            onChange={handleChange}
            style={{ ...input, top: "30px" }}
            placeholder="Address"
          /><br />

          <label style={{ ...lab3, top: "60px", width: "200px" }}>Profile :</label><br />
          <textarea
            name='profile'
            value={cvData.profile}
            onChange={handleChange}
            style={{ ...input1, top: "90px", width: "283px", height: "120.035px", resize: "none" }}
          /><br />

          <label style={{ ...lab3, top: "220px", width: "200px", marginLeft: "3px", paddingBottom: "33px" }}>Photo :</label><br />
          {cvData.photo && (
            <img
              src={`http://localhost:8000/storage/${cvData.photo}`}
              alt="Profile"
              style={{ width: '100px', height: '100px', marginBottom: '10px' }}
            />
          )}
          <label className="file">
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              style={{ ...input1, top: "250px" }}
              accept="image/*"
              aria-label="File browser example"
            />
            <span className="file-custom">Choose photo</span>
          </label><br />
        </div>
        <button type="submit" style={{ ...button, position: 'absolute', top: "460px", left: "970px" }}>Edit</button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}

export default Profile;
