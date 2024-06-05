import React, { useState } from 'react';
import { div1Style, titleStyle, h1D, div2, input1, lab1, input, lab2, lab3, buttontt, div3,button } from './Style2'; // Removed lab1 from import
import img2 from './img2/div.png';
import './cssD.css';
import { Link } from 'react-router-dom';

function PageD() {
  const [test, settest] = useState(false);
  const [userType, setUserType] = useState(""); 

  const Click = () => {
    settest(!test);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value); 
  };

  return (
    <form method='Post' action=''>
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
              value={"Candidate"}
              checked={userType === "Candidate"} 
              onChange={handleUserTypeChange} 
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            <p>Employe</p>
            <input
              type="radio"
              name='am'
              value={"Employe"}
              checked={userType === "Employe"} 
              onChange={handleUserTypeChange} 
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div style={div3}>
          <label style={lab2}>Email</label><br />
          <input type='text' name='Email' style={input} placeholder="user@email.com" /><br />
          <label style={lab3}>Password</label><br />
          <div>
            <input
              type={test ? 'text' : 'password'}
              id="pass"
              style={input1}
              placeholder="*********"
            />
            <span
              id="toggler"
              className={test ? 'fa fa-eye clicked' : 'fa fa-eye-slash'}
              onClick={Click}
            />
          </div>
          {userType === "Candidate" && (
            <Link to={"/login/candida/Profile"}style={buttontt}> <input type='submit' value={"Login"} style={button}  /></Link>
          )}
          {userType === "Employe" && (
            <Link to={"/login/Employer/Profile"}style={buttontt}> <input type='submit' value={"Login"} style={button}  /></Link>
          )}
        </div>
      </div>
    </form>
  );
}

export default PageD;
