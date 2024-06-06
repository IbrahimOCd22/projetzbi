import React, { useState, useEffect } from 'react';
import { div1Style, div4Style, logoStyle, menuStyle, styleli, navs, e15, e16, e17, e18, e19 } from './Style3';
import img4 from './img/log.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function PageO() {
  const [col, setCol] = useState("#AAA7C1");
  const [st, setSt] = useState("none");
  const [coll, setColl] = useState("#AAA7C1");
  const [stt, setStt] = useState("none");
  const [coli, setColi] = useState("#AAA7C1");
  const [sti, setSti] = useState("none");
  const [offers, setOffers] = useState([]);
  const [message, setMessage] = useState(null); // State to show success message
  const [candidateCategory, setCandidateCategory] = useState('');
  const { id } = useParams();

  useEffect(() => {
    // Fetch the candidate's CV data to get their category
    axios.get(`http://localhost:8000/api/CV/${id}`)
      .then(response => {
        setCandidateCategory(response.data.catagorie);
      })
      .catch(error => {
        console.error('Error fetching CV data:', error);
      });

    // Fetch all offers
    axios.get('http://localhost:8000/api/Offre')
      .then(response => {
        setOffers(response.data);
      })
      .catch(error => {
        console.error('Error fetching offers data:', error);
      });
  }, [id]);

  const handleDemende = (offerId) => {
    const data = {
      reponse: 'en cours',
      offre_id: offerId,
      candidat_id: id // Assuming the candidat_id is the same as the id from useParams
    };

    axios.post('http://localhost:8000/api/Demende', data)
      .then(response => {
        console.log('Demende created successfully:', response.data);
        setMessage('Demende created successfully!');
        setTimeout(() => setMessage(null), 3000); // Clear message after 3 seconds
      })
      .catch(error => {
        console.error('Error creating demende:', error);
      });
  };

  return (
    <div style={div1Style}>
      <div style={div4Style}>
        <nav style={navs}>
          <img src={img4} alt='logo' style={logoStyle} />
          <ul style={menuStyle}>
            <li style={styleli}><Link to={`/login/candida/Profile/${id}`} style={{ color: coll, textDecoration: stt }}
              onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
              onMouseLeave={() => { setColl("#AAA7C1"); setStt("none"); }}>Profile</Link></li>
            <li style={styleli}>
              <Link to={`/login/candida/cv/${id}`} style={{ color: col, textDecoration: st, }}
                onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
                onMouseLeave={() => { setCol("#AAA7C1"); setSt("none"); }}>CV</Link>
            </li>
            <li style={styleli}><Link to={`/login/candida/jobs/${id}`} style={{ color: '#E6DF2A', textDecoration: 'none', }}>Jobs</Link></li>
            <li style={styleli}><Link to={`/login/candida/notices/${id}`} style={{ color: coli, textDecoration: sti }}
              onMouseEnter={() => { setColi("#E6DF2A"); setSti("underline"); }}
              onMouseLeave={() => { setColi("#AAA7C1"); setSti("none"); }}
            >Message</Link></li>
          </ul>
        </nav>
        <h1 style={{ position: "relative", left: "550px", top: "85px", fontSize: "27px" }}>EXISTING OFFERS</h1>

        {message && <div style={{ color: 'green', textAlign: 'center' }}>{message}</div>}

        <div style={{ marginTop: "180px", position: "relative" }}>
          {offers.filter(offer => offer.categorie === candidateCategory).map((offer, index) => (
            <div key={index} style={e15}>
              <div style={e16}>
                <h1 style={e17}>{offer.categorie}</h1>
                <div style={e18}><h6>{offer.poste} </h6><pre>     </pre> <h6>{offer.salary} MAD</h6></div>
                <h4 style={e19}>{offer.description}</h4>
                <button onClick={() => handleDemende(offer.id)} style={{ marginTop: '10px' }}>Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageO;
