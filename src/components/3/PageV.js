import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { div1Style, div4Style, logoStyle, menuStyle, styleli, navs, inu, e16, e17, e18, e20, bit } from './Style3';
import img4 from './img/log.png';

function PageV() {
  const [col, setCol] = useState("#AAA7C1");
  const [st, setSt] = useState("none");
  const [coll, setColl] = useState("#AAA7C1");
  const [stt, setStt] = useState("none");
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    poste: '',
    salary: '',
    description: '',
    categorie: '',
    message: '',
    employer_id: 1  // Assuming employer_id is 1, update as necessary
  });

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/Offre');
      setOffers(response.data);
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOffer({ ...newOffer, [name]: value });
  };

  const handleAddOffer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/Offre', newOffer);
      setOffers([...offers, response.data]);
      setNewOffer({
        poste: '',
        salary: '',
        description: '',
        categorie: '',
        message: '',
        employer_id: 1  // Reset to default or update as necessary
      });
    } catch (error) {
      console.error('Error adding offer:', error);
    }
  };

  const handleDeleteOffer = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/Offre/${id}`);
      setOffers(offers.filter(offer => offer.id !== id));
    } catch (error) {
      console.error('Error deleting offer:', error);
    }
  };

  return (
    <div style={div1Style}>
      <div style={{ ...div4Style, bottom: "20px" }}>
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
                style={{ color: '#E6DF2A', textDecoration: 'none' }}
              >
                Offers
              </Link>
            </li>
            <li style={styleli}>
              <Link to="/login/Employer/demande" style={{ color: col, textDecoration: st }}
                onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
                onMouseLeave={() => { setCol("#AAA7C1"); setSt("none"); }}>
                Demand
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ background: "#fff", marginTop: "60px", width: "1236px", marginLeft: "40px", borderRadius: "10px", position: "relative", bottom: "20px" }}>
          <hr style={{ width: "400px", position: "relative", left: '90px', top: '26px' }} />
          <h6 style={{ color: "#656565", fontSize: "16px", position: "relative", fontWeight: "300", left: "560px" }}>NEW OFFERS</h6>
          <hr style={{ width: "400px", position: "relative", left: '680px', bottom: '26px' }} />

          <div style={{ marginLeft: "120px", display: 'flex', flexDirection: 'column', marginTop: "30px", position: "relative", bottom: "20px" }}>
            <form onSubmit={handleAddOffer}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', color: "#656565" }}>
                <div style={{ flex: '1' }}>
                  <label>Poste:</label><br />
                  <input
                    type="text"
                    name="poste"
                    value={newOffer.poste}
                    onChange={handleInputChange}
                    style={inu}
                  /><br />
                </div>
                <div style={{ flex: '1' }}>
                  <label>Salary:</label><br />
                  <input
                    type="text"
                    name="salary"
                    value={newOffer.salary}
                    onChange={handleInputChange}
                    style={inu}
                  /><br />
                </div>
                <div style={{ flex: '1' }}>
                  <label>Description:</label><br />
                  <input
                    type="text"
                    name="description"
                    value={newOffer.description}
                    onChange={handleInputChange}
                    style={inu}
                  /><br />
                </div>
                <div style={{ flex: '1' }}>
                  <label>Categories:</label><br />
                  <select
                    name="categorie"
                    value={newOffer.categorie}
                    onChange={handleInputChange}
                    style={inu}
                  >
                    <option value="">Select Category</option>
                    <option value="Marketing & Communication">Marketing & Communication</option>
                    <option value="Finance Management">Finance Management</option>
                    <option value="Web Development">Web Development</option>
                  </select><br />
                </div>
              </div>
              <div style={{ marginTop: '20px', color: "#656565" }}>
                <label>Message:</label><br />
                <textarea
                  rows="5"
                  cols="40"
                  name="message"
                  value={newOffer.message}
                  onChange={handleInputChange}
                  placeholder='Message for the accepted candidates'
                  style={{ width: '97.5%', border: "2px solid #656565" }}
                ></textarea><br />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button
                  type="submit"
                  style={{ background: "#29B82F", borderRadius: "5px", border: "none", color: "#fff", width: "100px", height: "30px" }}
                >
                  ADD
                </button>
              </div>
            </form>
          </div>

          <hr style={{ width: "400px", position: "relative", left: '90px', top: '26px' }} />
          <h6 style={{ color: "#656565", fontSize: "16px", position: "relative", fontWeight: "300", left: "560px" }}>OFFERS EXIST</h6>
          <hr style={{ width: "400px", position: "relative", left: '680px', bottom: '26px' }} />
          <div style={{ position: "relative", bottom: "20px" }}>
            {offers.map(offer => (
              <div key={offer.id} style={e20}>
                <div style={e16}>
                  <h1 style={e17}>{offer.categorie}</h1>
                  <div style={e18}><h6>{offer.poste} </h6><pre>     </pre> <h6>{offer.salary}</h6></div>
                </div>
                <button
                  style={{ ...bit, bottom: "90px", left: "900px", background: "#FD3F3F" }}
                  onClick={() => handleDeleteOffer(offer.id)}
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageV;
