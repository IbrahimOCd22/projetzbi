import React, { useState, useEffect } from 'react';
import { div1Style, div4Style, logoStyle, menuStyle, styleli, navs, divL, divL1, imgL, h1L, divL2 } from './Style3';
import img4 from './img/log.png';
import { Link, useParams } from 'react-router-dom';
import img7 from './img/img3.png';
import axios from 'axios';
import './cssL.css';

function PageM() {
  const [col, setCol] = useState("#AAA7C1");
  const [st, setSt] = useState("none");
  const [coll, setColl] = useState("#AAA7C1");
  const [stt, setStt] = useState("none");
  const [coli, setColi] = useState("#AAA7C1");
  const [sti, setSti] = useState("none");
  const [employer, setEmployer] = useState({ name: '', email: '', password: '', password_confirmation: '' });
  
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/Employer/${id}`)
        .then(response => {
          setEmployer({ ...response.data, password: '', password_confirmation: '' });
        })
        .catch(error => {
          console.error('Error fetching employer data:', error);
        });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployer({ ...employer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:8000/api/Employer/${id}`, employer)
        .then(response => {
          alert('Profile updated successfully');
        })
        .catch(error => {
          console.error('Error updating profile:', error);
        });
    }
  };

  return (
    <div style={{ ...div1Style, height: "960px" }}>
      <div style={{ ...div4Style, height: "900px" }}>
        <nav style={navs}>
          <img src={img4} alt='logo' style={logoStyle} />
          <ul style={menuStyle}>
            <li style={styleli}><Link to={`/login/Employer/Profile/${id}`} style={{ color: '#E6DF2A', textDecoration: 'none' }}>Profile</Link></li>
            <li style={styleli}>
              <Link to={`/login/Employer/offre/${id}`} style={{ color: col, textDecoration: st }}
                onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
                onMouseLeave={() => { setCol("#AAA7C1"); setSt("none"); }}>Offers</Link>
            </li>
            <li style={styleli}><Link to={`/login/Employer/demande/${id}`} style={{ color: coll, textDecoration: stt }}
              onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
              onMouseLeave={() => { setColl("#AAA7C1"); setStt("none"); }}>Demand</Link></li>
          </ul>
        </nav>
        <div style={divL}>
          <img style={imgL} src={img7} alt="img" />
          <div style={divL1}> <h1 style={h1L}>{employer.name}</h1></div>
        </div>
        <div style={{ ...divL2, backgroundColor: "#fff", height: "340px" }}>
          <form onSubmit={handleSubmit} style={{ marginLeft: "60px", position: "relative", top: "60px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginLeft: "130px" }}>
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <label>Name Employer :</label> <br />
                  <input
                    style={{ width: "400px" }}
                    type="text"
                    name="name"
                    value={employer.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Email :</label> <br />
                  <input
                    style={{ width: "400px" }}
                    type="email"
                    name="email"
                    value={employer.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <label>New Password :</label> <br />
                  <input
                    style={{ width: "400px" }}
                    type="password"
                    name="password"
                    value={employer.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Password Confirmation :</label> <br />
                  <input
                    style={{ width: "400px" }}
                    type="password"
                    name="password_confirmation"
                    value={employer.password_confirmation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button type="submit" style={{ width: "400px", marginLeft: "200px", color: "#fff", background: "#E6DF2A", border: "none", height: "40px" }}>Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PageM;
