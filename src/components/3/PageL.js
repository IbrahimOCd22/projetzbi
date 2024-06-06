import React, { useState, useEffect } from 'react';
import { div1Style, div4Style, logoStyle, menuStyle, styleli, navs, divL, divL1, imgL, h1L, divL2, divL3, butL1, inp, tr, td, h6td, ptd, buttd1, buttd2, thed, th, table, tbody, fot } from './Style3';
import img4 from './img/log.png';
import { Link, useParams } from 'react-router-dom';
import img7 from './img/img3.png';
import ReactPaginate from 'react-paginate';
import axios from 'axios'; // Added import
import './cssL.css';

function PageL() {
  const [col, setCol] = useState("#AAA7C1");
  const [st, setSt] = useState("none");
  const [coll, setColl] = useState("#AAA7C1");
  const [stt, setStt] = useState("none");
  const [coli, setColi] = useState("#AAA7C1");
  const [sti, setSti] = useState("none");
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]); // Added state for items
  const [candidateName, setCandidateName] = useState(""); // Added state for candidate name
  const { id } = useParams();

  useEffect(() => {
    // Fetch candidate's name by ID
    axios.get(`http://localhost:8000/api/candidat/${id}`)
      .then(response => {
        setCandidateName(response.data.name); // Set the candidate's name
      })
      .catch(error => {
        console.error('Error fetching candidate data:', error);
      });

    // Fetch all data for the table
    axios.get('http://localhost:8000/api/Demende')
      .then(demandeResponse => {
        const demandes = demandeResponse.data;

        // Fetch related offers and employers
        const fetchRelatedData = async () => {
          const combinedData = await Promise.all(demandes.map(async demande => {
            const offreResponse = await axios.get(`http://localhost:8000/api/Offre/${demande.offre_id}`);
            const offre = offreResponse.data;
            const employer = offre.employer;
            return {
              employerName: employer ? employer.name : '',
              employerEmail: employer ? employer.email : '',
              reponse: demande.reponse,
              poste: offre ? offre.poste : '',
              salary: offre ? offre.salary : '',
              demandeId: demande.id
            };
          }));

          setItems(combinedData);
        };

        fetchRelatedData();
      })
      .catch(error => {
        console.error('Error fetching demands:', error);
      });
  }, [id]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const handleCancel = (demandeId) => {
    // Handle cancellation logic
    axios.delete(`http://localhost:8000/api/Demende/${demandeId}`)
      .then(response => {
        setItems(items.filter(item => item.demandeId !== demandeId));
      })
      .catch(error => {
        console.error('Error cancelling demande:', error);
      });
  };

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <tr style={tr} key={i}>
              <td style={td}><h6 style={h6td}>{item.employerName}</h6><p style={ptd}>{item.employerEmail}</p></td>
              <td style={td}><button style={{ ...buttd1, color: "orange" }}>{item.reponse}</button></td>
              <td style={td}><h6 style={h6td}>{item.poste}</h6></td>
              <td style={td}><h6 style={h6td}>{item.salary}</h6>  <p style={{ ...ptd, paddingLeft: "9px" }}>MAD</p></td>
              <td style={td}><button style={buttd2} onClick={() => handleCancel(item.demandeId)}>Cancel</button></td>
            </tr>
          ))}
      </>
    );
  }

  return (
    <div style={div1Style}>
      <div style={div4Style}>
        <nav style={navs}>
          <img src={img4} alt='logo' style={logoStyle} />
          <ul style={menuStyle}>
            <li style={styleli}><Link to={`/login/candida/Profile/${id}`} style={{ color: '#E6DF2A', textDecoration: 'none', }}>Profile</Link></li>
            <li style={styleli}>
              <Link to={`/login/candida/cv/${id}`} style={{ color: col, textDecoration: st, }}
                onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
                onMouseLeave={() => { setCol("#AAA7C1"); setSt("none"); }}>CV</Link>
            </li>
            <li style={styleli}><Link to={'/login/candida/jobs'} style={{ color: coll, textDecoration: stt }}
              onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
              onMouseLeave={() => { setColl("#AAA7C1"); setStt("none"); }}>Jobs</Link></li>

            <li style={styleli}><Link to={'/login/candida/notices'} style={{ color: coli, textDecoration: sti }}
              onMouseEnter={() => { setColi("#E6DF2A"); setSti("underline"); }}
              onMouseLeave={() => { setColi("#AAA7C1"); setSti("none"); }}
            >Message</Link></li>
          </ul>
        </nav>
        <div style={divL}>
          <img style={imgL} src={img7} alt="img" />
          <div style={divL1}> <h1 style={h1L}>{candidateName}</h1></div>
        </div>
        <div style={divL2}>
          <div style={divL3} >
            <input type='text' style={inp} placeholder="Search Users by Name or Email" />
            <button style={butL1}>Search</button>
            <hr style={{ marginBottom: "0px" }} />
            <table style={table}>
              <thead style={thed}>
                <tr>
                  <th style={th}>NAME</th>
                  <th style={th}>ANSWER</th>
                  <th style={th}>POST</th>
                  <th style={th}>SALARY</th>
                  <th style={th}>CANCELLATION</th>
                </tr>
              </thead>
              <tbody style={tbody}>
                <Items currentItems={currentItems} />
              </tbody>
            </table>
            <div style={{ border: '2px solid #D6D8DA', height: "70px", width: "1236px", position: "absolute", top: "1271px", left: "41px", backgroundColor: '#ffffff', }}>
              <div style={fot}>
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageL;
