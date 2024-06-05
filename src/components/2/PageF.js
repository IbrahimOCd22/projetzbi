import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { div1Style, titleStyle, h1D, div4, input, lab2, lab3, button, div3 } from './Style2'; // Removed lab1 from import
import img2 from './img2/div.png';
import './cssD.css';
import axios from 'axios';

function PageF() {
  const [test, setTest] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const togglePasswordVisibility = () => {
    setTest(!test);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    console.log('Submitting form', { name, email, password });

    try {
      const response = await axios.post('http://localhost:8000/api/Employer', { name, email, password });
      console.log('Employer created:', response.data);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/login/Employer/Profile'); // Navigate to the desired route
    } catch (err) {
      console.error('Error creating employer:', err.response?.data || err.message);
      setError(err.response?.data.message || 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle} />
        <h1 style={h1D}>Sign up</h1>

        <div style={div4}>
          <label style={lab2}>Company Name :</label><br />
          <input
            onChange={(e) => setName(e.target.value)}
            type='text'
            name='empName'
            style={input}
            placeholder="Name"
            value={name}
          /><br />
          <label style={{ ...lab3, top: "69px", width: "200px", marginLeft: "3px" }}>Email :</label><br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            name='Email'
            style={{ ...input, top: "130px" }}
            placeholder="user@email.com"
            value={email}
          /><br />
        </div>

        <div style={div3}>
          <label style={lab2}>Password</label><br />
          <div>
            <input
              type={test ? 'text' : 'password'}
              style={input}
              placeholder="*********************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={test ? 'fa fa-eye clicked' : 'fa fa-eye-slash'}
              onClick={togglePasswordVisibility}
            />
          </div>

          <label style={{ ...lab3, top: "69px", width: "200px", marginLeft: "3px" }}>Confirm your password :</label><br />
          <div>
            <input
              type={test ? 'text' : 'password'}
              style={{ ...input, top: "130px" }}
              placeholder="*********************"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className={test ? 'fa fa-eye clicked' : 'fa fa-eye-slash'}
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
        <input
          type='submit'
          value={"Sign up"}
          style={{ ...button, position: 'absolute', top: "360px", left: "725px" }}
        />
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}

export default PageF;
