
import React, { useState } from 'react';
import { div1Style, titleStyle2, h1D, div4, input1, option1, buttonI, h4, lab3, button, div3, spanI } from './Style2'; // Removed lab1 from import
import img2 from './img2/div.png';
import './cssD.css';
import { Link } from 'react-router-dom';

function PageK() {
  const [test, settest] = useState(false);

  const Click = () => {
    settest(!test);
  };

  return (
    <form method='Post' action=''>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle2} />
        <h1 style={{ ...h1D, top: "125px" }}>Create CV</h1>

        <div style={{ ...div4, marginTop: "110px", }}>
          <h4 style={{ ...h4, left: "80px", top: "120px" }}>Languages </h4>
          <label style={{ ...lab3, top: "140px", width: "200px", marginleft: "3px" }}>Language : </label><br />
          <input type='text' name='Email' style={{ ...input1, top: "170px" }} /><br />

          <label style={{ ...lab3, top: "220px", width: "200px", marginleft: "3px", paddingBottom: "33px" }}>Level :</label><br />
          <select name='Email' style={{ ...input1, top: "250px", color: "#fff" }} >
            <option style={option1} value="Beginner">Beginner </option>
            <option style={option1} value="Intermediate">Intermediate </option>
            <option style={option1} value="Advanced">Advanced </option>
          </select><br />
          <Link to={"/signup/cvcandida/autre"}><button style={{ ...buttonI, left: "110px", top: "350px" }}><span style={spanI}>+</span> add new</button></Link>


        </div>

        <div style={{ ...div3, marginTop: "110px", }}>
          <h4 style={{ ...h4, left: "80px", top: "120px" }}>EXPERTISE </h4>

          <label style={{ ...lab3, top: "140px", width: "200px", marginleft: "3px" }}>EXPERTISE : </label><br />
          <input type='text' name='Email' style={{ ...input1, top: "170px" }} /><br />

          <label style={{ ...lab3, top: "220px", width: "200px", marginleft: "3px", paddingBottom: "33px" }}>Level  :</label><br />
          <select name='Email' style={{ ...input1, top: "250px", color: "#fff" }} >
            <option style={option1} value="Beginner">Beginner </option>
            <option style={option1} value="Intermediate">Intermediate </option>
            <option style={option1} value="Advanced">Advanced </option>

          </select><br />
          <Link to={"/signup/cvcandida/autre"}><button style={{ ...buttonI, left: "110px", top: "350px" }}><span style={spanI}>+</span> add new</button></Link>


        </div>
        <Link to={"/login/candida/Profile"}> <input type='submit' value={"next -->"} style={{ ...button, position: 'absolute', top: "440px", left: "970px" }} /></Link>

      </div>
    </form>
  );
}

export default PageK;
