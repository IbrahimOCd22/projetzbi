import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { div1Style, div4Style, logoStyle, menuStyle, styleli, navs, buy } from './Style3';
import img4 from './img/log.png';
import axios from 'axios';

function PageR() {
  const [col, setCol] = React.useState("#AAA7C1");
  const [st, setSt] = React.useState("none");
  const [coll, setColl] = React.useState("#AAA7C1");
  const [stt, setStt] = React.useState("none");
  const [demandes, setDemandes] = useState([]); // State for demandes data

  useEffect(() => {
    // Fetch demandes data from the backend, including related candidate and CV data
    axios.get('http://localhost:8000/api/Demende')
      .then(response => {
        setDemandes(response.data); // Set the demandes data
      })
      .catch(error => {
        console.error('Error fetching demandes data:', error);
      });
  }, []);

  return (
    <div style={{ ...div1Style, minHeight: '770px' }}>
      <div style={div4Style}>
        <nav style={navs}>
          <img src={img4} alt="logo" style={logoStyle} />
          <ul style={menuStyle}>
            <li style={styleli}>
              <Link
                to="/login/Employer/Profile"
                style={{ color: coll, textDecoration: stt }}
                onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
                onMouseLeave={() => { setColl("#AAA7C1"); setStt("none"); }}
              >
                Profile
              </Link>
            </li>
            <li style={styleli}>
              <Link
                to="/login/Employer/offre"
                style={{ color: col, textDecoration: st }}
                onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
                onMouseLeave={() => { setCol("#AAA7C1"); setSt("none"); }}
              >
                Offers
              </Link>
            </li>
            <li style={styleli}>
              <Link to="/login/Employer/demande" style={{ color: '#E6DF2A', textDecoration: 'none' }}>
                Demande
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ background: "#fff", marginTop: "60px", width: "1236px", marginLeft: "40px", borderRadius: "10px", height: "550px" }}>
          <hr style={{ width: "400px", position: "relative", left: '90px', top: '26px' }} />
          <h6 style={{ color: "#656565", fontSize: "16px", position: "relative", fontWeight: "300", left: "560px" }}>
            Demande
          </h6>
          <hr style={{ width: "400px", position: "relative", left: '680px', bottom: '26px' }} />
          <div style={{ marginTop: "60px" }}>
            {demandes.map((demande, index) => (
              <div key={index} style={{ background: "#E2F6FB", width: "1050px", height: '150px', marginLeft: "96px", marginTop: "30px" }}>
                <img src={demande.candidat && demande.candidat.cv ? `http://localhost:8000/storage/${demande.candidat.cv.photo}` : img4} style={{ marginLeft: "40px", marginTop: "40px", borderRadius: "20px", width: "50px", height: "50px" }} alt="Candidate" />
                <h1 style={{ fontSize: "17px", position: "relative", left: '170px', bottom: "30px" }}>{demande.candidat.name}</h1>
                <button style={buy}>
                  <Link to={`/login/Employer/demande/More/${demande.candidat.id}`} style={{ color: "#fff", paddingRight: '0px', paddingLeft: '35px' }}>More</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageR;
