import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { div1Style, titleStyle, h1D, div4, input1, input, lab2, lab3, button, div3 } from './Style2';
import img2 from './img2/div.png';
import './cssD.css';
import axios from 'axios';

function PageG() {
  const [test, setTest] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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

    try {
      const response = await axios.post('http://localhost:8000/api/candidat', {
        name: fullName,
        email,
        password,
      });

      console.log('Candidate registered:', response.data);
      const candidateId = response.data.id; // Assuming API response contains the ID
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate(`/signup/cvcandida/${candidateId}`);
    } catch (err) {
      console.error('Error registering candidate:', err.response?.data || err.message);
      if (err.response?.data.errors) {
        const errorMessages = Object.values(err.response.data.errors).join(', ');
        setError(errorMessages);
      } else {
        setError(err.response?.data.message || 'An error occurred');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle} />
        <h1 style={h1D}>Sign up</h1>

        <div style={div4}>
          <label style={lab2}>Full Name :</label><br />
          <input
            type='text'
            name='canname'
            style={input}
            placeholder="Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          /><br />
          <label style={{ ...lab3, top: "69px", width: "200px", marginLeft: "3px" }}>Email :</label><br />
          <input
            type='text'
            name='Email'
            style={{ ...input1, top: "100px" }}
            placeholder="user@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
        </div>

        <div style={div3}>
          <label style={lab2}>Password</label><br />
          <div>
            <input
              type={test ? 'text' : 'password'}
              style={input}
              placeholder="*********"
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
              style={{ ...input1, top: "100px" }}
              placeholder="*********"
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
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </form>
  );
}

export default PageG;
