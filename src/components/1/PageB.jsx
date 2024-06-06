import React, { useState, useEffect } from 'react';
import img2 from './img/title.png';
import img3 from './img/free.png';
import img4 from './img/log.png';
import pageB1 from './img/pageB1.png';
import pageB2 from './img/pageB2.png';
import pageB3 from './img/pageB3.png';
import pageB4 from './img/pageB4.png';
import pageB5 from './img/pageB5.png';
import pageB6 from './img/pageB6.png';
import pageB7 from './img/pageB7.png';
import pageB8 from './img/pageB8.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { tex, titre, imgbutstyl, butstyle, allcont, h1style, div1Style, div2Style, titleStyle, freeStyle, menuStyle, styleli, logoStyle } from './StylePage';

function PageB() {
  const [col, setCol] = useState("black");
  const [st, setSt] = useState("none");
  const [coll, setColl] = useState("black");
  const [stt, setStt] = useState("none");
  const [offers, setOffers] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/api/Offre')
      .then(response => {
        setOffers(response.data);
        const counts = response.data.reduce((acc, offer) => {
          acc[offer.categorie] = (acc[offer.categorie] || 0) + 1;
          return acc;
        }, {});
        setCategoryCounts(counts);
      })
      .catch(error => {
        console.error('Error fetching offers:', error);
      });
  }, []);

  const categories = [
    { name: 'Marketing & Communication', img: pageB1 },
    { name: 'Finance Management', img: pageB2 },
    { name: 'Web Development', img: pageB3 },
    { name: 'UI / UX Design', img: pageB4 },
    { name: 'Project Management', img: pageB5 },
    { name: 'Business & Consulting', img: pageB6 },
    { name: 'Graphic Designer', img: pageB7 },
    { name: 'Video Editor', img: pageB8 }
  ];

  const getCategoryStyle = (name) => {
    if (name === 'Marketing & Communication' || name === 'Business & Consulting') {
      return { ...butstyle, minHeight: '150px', minWidth: '300px' };
    }
    return butstyle;
  };

  return (
    <div style={div1Style}>
      <img src={img2} alt='erreur' style={titleStyle} />
      <img src={img3} alt='erreur' style={freeStyle} />
      <div style={div2Style}>
        <nav>
          <img src={img4} alt='logo' style={logoStyle} />
          <ul style={menuStyle}>
            <li style={styleli}><Link to={'/'} style={{ color: col, textDecoration: st, }} onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
              onMouseLeave={() => { setCol("black"); setSt("none"); }}
            >Home</Link></li>
            <li style={styleli}>
              <Link to={'/categorie'} style={{ color: '#E6DF2A', textDecoration: 'none', }}
              >
                Categories
              </Link>
            </li>
            <li style={styleli}><Link to={'/how'} style={{ color: coll, textDecoration: stt, width: "120px" }}
              onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
              onMouseLeave={() => { setColl("black"); setStt("none"); }}
            >How it works</Link></li>
          </ul>
        </nav>
        <strong><h1 style={h1style}>Available Categories</h1></strong>
        <div style={{ ...allcont, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((category, index) => (
            <div key={index} style={getCategoryStyle(category.name)}>
              <img src={category.img} alt='erreur' style={imgbutstyl} />
              <h1 style={titre}>{category.name}</h1>
              <p style={tex}>{categoryCounts[category.name] || 0} Jobs Available</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageB;
