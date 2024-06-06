import React, { useState } from 'react';
import { div1Style, titleStyle, h1D, div2, input1, lab1, input, lab2, lab3, buttontt, div3, button } from './Style2';
import img2 from './img2/div.png';
import './cssD.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PageD() {
  const [test, settest] = useState(false);
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const loginData = { email, password };
    let loginUrl = "";

    if (userType === "Candidate") {
      loginUrl = "http://localhost:8000/api/login/candidate";
    } else if (userType === "Employer") {
      loginUrl = "http://localhost:8000/api/login/employer";
    }

    axios.post(loginUrl, loginData)
      .then(response => {
        if (response.data.status === 'success') {
          const userId = userType === "Candidate" ? response.data.candidate.id : response.data.employer.id;
          if (userType === "Candidate") {
            navigate(`/login/candida/Profile/${userId}`);
          } else if (userType === "Employer") {
            navigate(`/login/Employer/Profile/${userId}`);
          }
        } else {
          setError("Invalid credentials");
        }
      })
      .catch(error => {
        setError("Invalid credentials");
      });
  };

  const Click = () => {
    settest(!test);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <form onSubmit={handleLogin}>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle} />
        <h1 style={h1D}>Login</h1>
        <h5 style={lab1}>I am a :</h5>
        <div style={div2}>
          <label className="cont">
            <p>Candidate</p>
            <input
              type="radio"
              name='am'
              value="Candidate"
              checked={userType === "Candidate"}
              onChange={handleUserTypeChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            <p>Employer</p>
            <input
              type="radio"
              name='am'
              value="Employer"
              checked={userType === "Employer"}
              onChange={handleUserTypeChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div style={div3}>
          <label style={lab2}>Email</label><br />
          <input type='text' name='Email' style={input} placeholder="user@email.com" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <label style={lab3}>Password</label><br />
          <div>
            <input
              type={test ? 'text' : 'password'}
              id="pass"
              style={input1}
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              id="toggler"
              className={test ? 'fa fa-eye clicked' : 'fa fa-eye-slash'}
              onClick={Click}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type='submit' style={button}>Login</button>
        </div>
      </div>
    </form>
  );
}

export default PageD;
