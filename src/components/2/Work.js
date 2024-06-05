import React, { useState } from 'react';
import { div1Style, titleStyle2, h1D, div4, input1, option1, input, lab2, lab3, button, div3, h4, buttonI, spanI } from './Style2'; // Removed lab1 from import
import img2 from './img2/div.png';
import './cssD.css';
import { Link } from 'react-router-dom';

function Work() {
  const [test, settest] = useState(false);

  const Click = () => {
    settest(!test);
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

  return (
    <form method='Post' action=''>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle2} />
        <h1 style={{ ...h1D, top: "125px" }}>Create CV</h1>
        <h4 style={h4}>Work Experiences</h4>
        <div style={{ ...div4, marginTop: "200px", }}>

          <label style={{ ...lab2, top: "10px" }}>Employer :</label><br />
          <input type='text' name='Employer' style={{ ...input, top: "30px" }} placeholder="Name" /><br />

          <label style={{ ...lab3, top: "60px", width: "200px", marginleft: "3px" }}>Job Title :</label><br />
          <input type='text' name='Email' style={{ ...input1, top: "90px" }} placeholder="user@email.com" /><br />

          <label style={{ ...lab3, top: "140px", width: "200px", marginleft: "3px" }}>Start Date : </label><br />
          <select style={{ ...input1, top: "170px", color: "#fff", width: "130px" }} className="custom-select">
            {months.map((month, index) => (
              <option style={option1} key={index} value={month}>{month}</option>
            ))}
          </select>
          <select style={{ ...input1, top: "170px", width: "130px", left: "160px" }} className="custom-select">
            {years.map((year, index) => (
              <option style={option1} key={index} value={year}>{year}</option>
            ))}
          </select>
          <label style={{ ...lab3, top: "220px", width: "200px", marginleft: "3px", paddingBottom: "33px" }}>End Date :</label><br />

          <select name='Email' style={{ ...input1, top: "250px", color: "#fff", width: "130px" }} >
            {months.map((month, index) => (
              <option style={option1} key={index} value={month}>{month}</option>
            ))}
          </select><br />

          <select name='Email' style={{ ...input1, top: "250px", width: "130px", left: "160px" }}>
            {years.map((year, index) => (
              <option style={option1} key={index} value={year}>{year}</option>
            ))}
          </select><br />
        </div>

        <div style={{ ...div3, marginTop: "200px", }}>
          <label style={{ ...lab2, top: "10px" }}>Location :</label><br />
          <input type='text' name='Address' style={{ ...input, top: "30px" }} placeholder="Address" /><br />

          <label style={{ ...lab3, top: "60px", width: "200px", }}>Description :</label><br />
          <textarea style={{ ...input1, top: "90px", width: "283px ", height: "120.035px", resize: "none" }} placeholder='Describe your tasks, responsibilities and any competencies related to this work
 experience' />
        </div>
        <Link to={"/login/candida/cv/edit"}> <input type='submit' value={"Edite -->"} style={{ ...button, position: 'absolute', top: "410px", left: "940px" }} /></Link>

      </div>
    </form>
  );
}

export default Work;
