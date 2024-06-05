import React, { useState } from 'react';
import { div1Style, titleStyle, h1D, div2, button } from './Style2'; // Removed lab1 from import
import img2 from './img2/div.png';
import './cssE.css';
import { Link } from 'react-router-dom';

function PageE() {
  const [userType, setUserType] = useState("");



  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <form method='Post' action=''>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle} />
        <h1 style={h1D}>Sign up</h1>

        <div style={{ ...div2, width: '350px', height: '20vh', left: "700px", top: "250px" }}>
          <label className="container">
            <p>Candidate</p>
            <input
              type="radio"
              name='am'
              value={"Candidate"}
              checked={userType === "Candidate"}
              onChange={handleUserTypeChange}
            />
            <span className="chak"></span>
          </label>
          <label className="container">
            <p>Employe</p>
            <input
              type="radio"
              name='sig'
              value={"Employe"}
              checked={userType === "Employe"}
              onChange={handleUserTypeChange}
            />
            <span className="chak"></span>
          </label>
        </div>

        {userType === "Candidate" && (
          <Link to={"/signup/candida"}> <input type='submit' value={"Sign up"} style={{ ...button, position: 'absolute', top: "320px", left: "700px", width: '350px' }} /></Link>
        )}
        {userType === "Employe" && (
          <Link to={"/signup/Employer"}> <input type='submit' value={"Sign up"} style={{ ...button, position: 'absolute', top: "320px", left: "700px", width: '350px' }} /></Link>
        )}

      </div>
    </form>
  );
}

export default PageE;
