import React, { useState, useEffect } from 'react';
import { div1Style, div4Style, logoStyle, menuStyle, styleli, navs, e15, e16, e17, e19 } from './Style3';
import img4 from './img/log.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function PageP() {
  const { id } = useParams();
  const [col, setCol] = useState("#AAA7C1");
  const [st, setSt] = useState("none");
  const [coll, setColl] = useState("#AAA7C1");
  const [stt, setStt] = useState("none");
  const [coli, setColi] = useState("#AAA7C1");
  const [sti, setSti] = useState("none");
  const [offres, setOffres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDemendeOffres = async () => {
      try {
        // Fetch the Demende records for the current candidate
        const demendeResponse = await axios.get(`http://localhost:8000/api/Demende?candidat_id=${id}`);
        const demendeData = demendeResponse.data;

        // Filter the Demende records with reponse set to true
        const acceptedDemendes = demendeData.filter(demende => demende.reponse === 'true');

        // Fetch the corresponding Offre details for the accepted Demendes
        const offrePromises = acceptedDemendes.map(demende => 
          axios.get(`http://localhost:8000/api/Offre/${demende.offre_id}`)
        );

        const offreResponses = await Promise.all(offrePromises);
        const offresData = offreResponses.map(response => response.data);

        setOffres(offresData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchDemendeOffres();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={div1Style}>
      <div style={div4Style}>
        <nav style={navs}>
          <img src={img4} alt='logo' style={logoStyle} />
          <ul style={menuStyle}>
            <li style={styleli}><Link to={`/login/candida/Profile/${id}`} style={{ color: coli, textDecoration: sti }}
              onMouseEnter={() => { setColi("#E6DF2A"); setSti("underline"); }}
              onMouseLeave={() => { setColi("#AAA7C1"); setSti("none"); }} >Profile</Link></li>
            <li style={styleli}>
              <Link to={`/login/candida/cv/${id}`} style={{ color: col, textDecoration: st, }}
                onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
                onMouseLeave={() => { setCol("#AAA7C1"); setSt("none"); }}>CV</Link>
            </li>
            <li style={styleli}><Link to={`/login/candida/jobs/${id}`} style={{ color: coll, textDecoration: stt }}
              onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
              onMouseLeave={() => { setColl("#AAA7C1"); setStt("none"); }}>Jobs</Link></li>
            <li style={styleli}><Link to={'/login/candida/notices'} style={{ color: '#E6DF2A', textDecoration: 'none', }}
            >Message</Link></li>
          </ul>
        </nav>
        <h1 style={{ position: "relative", left: "600px", top: "85px", fontSize: "27px" }}>Message</h1>
        <div style={{ marginTop: "180px", position: "relative" }}>
          {offres.map((offre, index) => (
            <div key={index} style={e15}>
              <div style={e16}>
                <h1 style={e17}>{offre.poste}</h1>
                <h4 style={e19}>{offre.message}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageP;
