import React, { useState } from 'react';
import { div1Style, titleStyle2, h1D, div4, input1, option1, input, lab2, lab3, button, div3 } from './Style2'; 
import img2 from './img2/div.png';
import './cssD.css';
import { Link } from 'react-router-dom';

function Profile() {
  const [test, settest] = useState(false);

  const Click = () => {
    settest(!test);
  };

  return (
    <form method='Post' action=''>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle2} />
        <h1 style={{ ...h1D, top: "125px" }}>Create CV</h1>

        <div style={{ ...div4, marginTop: "185px", }}>

          <label style={{ ...lab2, top: "10px" }}>Company Name :</label><br />
          <input type='text' name='empName' style={{ ...input, top: "30px" }} placeholder="Name" /><br />

          <label style={{ ...lab3, top: "60px", width: "200px", marginleft: "3px" }}>Email :</label><br />
          <input type='text' name='Email' style={{ ...input1, top: "90px" }} placeholder="user@email.com" /><br />

          <label style={{ ...lab3, top: "140px", width: "200px", marginleft: "3px" }}>PHONE : </label><br />
          <input type='text' name='Email' style={{ ...input1, top: "170px" }} placeholder="PHONE " /><br />

          <label style={{ ...lab3, top: "220px", width: "200px", marginleft: "3px", paddingBottom: "33px" }}>Choose Categories :</label><br />
          <select name='Email' style={{ ...input1, top: "250px", color: "#fff" }} >
            <option style={option1}>Categories </option>
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

        <div style={{ ...div3, marginTop: "185px", }}>
          <label style={{ ...lab2, top: "10px" }}>Address :</label><br />
          <input type='text' name='Address' style={{ ...input, top: "30px" }} placeholder="Address" /><br />

          <label style={{ ...lab3, top: "60px", width: "200px", }}>Profile :</label><br />
          <textarea style={{ ...input1, top: "90px", width: "283px ", height: "120.035px", resize: "none" }} />

          <label style={{ ...lab3, top: "220px", width: "200px", marginleft: "3px", paddingBottom: "33px" }}>photo :</label><br />
          <label class="file">
            <input type="file" name="photo" style={{ ...input1, top: "250px" }} accept="image/*" aria-label="File browser example" />
            <span class="file-custom">Choose photo</span>
          </label>
        </div>
        <Link to={"/login/candida/cv/edit"}> <input type='submit' value={"Edite -->"} style={{ ...button, position: 'absolute', top: "460px", left: "970px" }} /></Link>

      </div>
    </form>
  );
}

export default Profile;
