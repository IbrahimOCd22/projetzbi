import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { 
  div1Style, div4Style, logoStyle, menuStyle, styleli, navs, divL, imgL, divL7, 
  div4, div44, imgpr, h11, p11, imgLl, p111, p112, bord, ppp, im11, alll, ppll,
  e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14 
} from './Style3';
import img4 from './img/log.png';
import img7 from './img/img3.png';
import img77 from './img/edit_cv.jpeg';
import r11 from './img/1.jpeg';
import r12 from './img/2.jpeg';
import r13 from './img/3.jpeg';
import './cssL.css';

function PageN() {
  const { id } = useParams();
  const [col, setCol] = useState("#AAA7C1");
  const [st, setSt] = useState("none");
  const [coll, setColl] = useState("#AAA7C1");
  const [stt, setStt] = useState("none");
  const [coli, setColi] = useState("#AAA7C1");
  const [sti, setSti] = useState("none");
  const [cvData, setCvData] = useState({
    education_details: [],
    languages: [],
    work_experiences: [],
    expertise: [],
  });
  const fetchCVData = () => {
    axios.get(`http://localhost:8000/api/CV/${id}`)
      .then(response => {
        setCvData(response.data);
      })
      .catch(error => {
        console.error('Error fetching CV data:', error);
      });
  };
  useEffect(() => {
    fetchCVData();
  }, [id]);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/CV/${id}`)
      .then(response => {
        setCvData(response.data);
      })
      .catch(error => {
        console.error('Error fetching CV data:', error);
      });
  }, [id]);

  const handleDelete = async (type, itemId) => {
    try {
      await axios.delete(`http://localhost:8000/api/${type}/${itemId}`);
      fetchCVData(); // Refetch the CV data after deletion

    } catch (error) {
      console.error(`Error deleting ${type} item:`, error);
    }
  };

  return (
    <div style={div1Style}>
      <div style={div4Style}>
        <nav style={navs}>
          <img src={img4} alt='logo' style={logoStyle} />
          <ul style={menuStyle}>
            <li style={styleli}><Link to={`/login/candida/Profile/${id}`} style={{ color: col, textDecoration: st, }}
              onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
              onMouseLeave={() => { setCol("#AAA7C1"); setSt("none"); }}>Profile</Link></li>
            <li style={styleli}>
              <Link to={'/login/candida/cv'} style={{ color: '#E6DF2A', textDecoration: 'none', }}>CV</Link>
            </li>
            <li style={styleli}><Link to={`/login/candida/jobs/${id}`} style={{ color: coll, textDecoration: stt }}
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
          <div style={divL7}>
            <img src={cvData.photo ? `http://localhost:8000/storage/${cvData.photo}` : img7} style={imgpr} alt="Profile" />
            <h1 style={h11}> PROFILE :</h1>
            <p style={p11}>{cvData.profile}</p>
            <Link to={`/Profile/${id}`}><img style={imgLl} src={img77} alt="img" /></Link>
            <p style={p111}>{cvData.nom}</p>
            <p style={p112}>{cvData.catagorie}</p>

            <div style={alll}>
              <div style={bord}>
                <img src={r11} style={im11} alt="img" />  <p style={ppp}>{cvData.email}</p>
              </div>
              <div style={bord}>
                <img src={r12} style={im11} alt="img" />  <p style={ppp}>{cvData.adress}</p>
              </div>
              <div style={bord}>
                <img src={r13} style={im11} alt="img" />  <p style={ppp}>{cvData.phone}</p>
              </div>
            </div>

          </div>

        </div>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <div style={div4}>
            <div >
              <div style={e1}>
                <p style={e2}> EDUCATION</p>
              </div>
              <hr style={e3} />
              <div style={{ left: "30px", position: "relative", width: "500px" }}>
                {cvData.education_details.map((education, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex' }}>
                      <h1 style={e4}>{education.school}</h1>
                      <Link to={`/Education/${education.id}`} style={e12}>Edit</Link>
                      <button onClick={() => handleDelete('education', education.id)} style={e11}>Delete</button>
                    </div>
                    <h2 style={e5}>{education.subje}</h2>
                    <p style={e6}>{education.startdate} - {education.enddate}</p>
                    <p style={e7}>{education.description}</p>
                  </div>
                ))}
              </div>
              <Link to={`/education/add/${id}`}><button style={e13}>+</button></Link>

              <div style={e1}>
                <p style={e2}>LANGUAGES</p>
              </div>
              <hr style={e3} />
              <div style={e8}>
                {cvData.languages.map((language, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex' }}>
                      <p style={ppll}>{language.languages} : {language.level}</p>
                      <Link to={`/Lang/${language.id}`} style={e12}>Edit</Link>
                      <button onClick={() => handleDelete('Language', language.id)} style={e11}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
              <Link to={`/languages/add/${id}`}><button style={e14}>+</button></Link>

            </div>
          </div>

          <div style={div44}>
            <div >
              <div style={e9}>
                <p style={e10}>EXPERIENCE</p>
              </div>
              <hr style={e3} />
              <div style={{ left: "30px", position: "relative", width: "500px" }}>
                {cvData.work_experiences.map((experience, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex' }}>
                      <h1 style={e4}>{experience.localisation}</h1>
                      <Link to={`/Work/${experience.id}`} style={e12}>Edit</Link>
                      <button onClick={() => handleDelete('work', experience.id)} style={e11}>Delete</button>
                    </div>
                    <h2 style={e5}>{experience.jobtitre}</h2>
                    <p style={e6}>{experience.startdate} - {experience.enddate}</p>
                    <p style={e7}>{experience.description}</p>
                  </div>
                ))}
              </div>
              <Link to={`/work/add/${id}`}><button style={e13}>+</button></Link>

              <div style={{ borderRadius: "10px", background: "#fff", width: "300px", height: "50px", top: "30px", left: "30px", position: "relative" }}>
                <p style={e10}>EXPERTISE</p>
              </div>
              <hr style={e3} />
              <div style={e8}>
                {cvData.expertise.map((expertise, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex' }}>
                      <p style={ppll}>{expertise.expertise} : {expertise.level}</p>
                      <Link to={`/Expen/${expertise.id}`} style={e12}>Edit</Link>
                      <button onClick={() => handleDelete('Expertise', expertise.id)} style={e11}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
              <Link to={`/expertise/add/${id}`}><button style={e14}>+</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageN;
