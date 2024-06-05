import React from 'react';
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
import { tex, titre, imgbutstyl, butstyle, allcont, h1style, div1Style, div2Style, titleStyle, herroStyle, freeStyle, menuStyle, styleli, logoStyle } from './StylePage';

function PageB() {
  const [col, setCol] = React.useState("black");
  const [st, setSt] = React.useState("none");
  const [coll, setColl] = React.useState("black");
  const [stt, setStt] = React.useState("none");
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
            <li style={styleli}><Link to={'/how'} style={{ color: coll, textDecoration: stt,width:"120px"  }}
              onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
              onMouseLeave={() => { setColl("black"); setStt("none"); }}
            >How it works</Link></li>
          </ul>
        </nav>
        <strong><h1 style={h1style}>Available Categories</h1></strong>
        <div style={allcont}>
          <div style={butstyle}>
            <img src={pageB1} alt='erreur' style={imgbutstyl} />
            <h1 style={titre}>Marketing & <br /> Communication </h1>
            <p style={tex}>0 Jobs Available </p>
          </div>
          <div style={butstyle}>
            <img src={pageB2} alt='erreur' style={imgbutstyl} />
            <h1 style={titre}>Finance <br /> Management</h1>
            <p style={tex}>0 Jobs Available </p>
          </div>
          <div style={butstyle}>
            <img src={pageB3} alt='erreur' style={imgbutstyl} />
            <h1 style={titre}> Web<br /> Development</h1>
            <p style={tex}>0 Jobs Available </p>
          </div>
          <div style={butstyle}>
            <img src={pageB4} alt='erreur' style={imgbutstyl} />
            <h1 style={titre}>UI / UX <br />Design</h1>
            <p style={tex}>0 Jobs Available </p>
          </div>
          <div style={butstyle}>
            <img src={pageB5} alt='erreur' style={imgbutstyl} />
            <h1 style={titre}>Project<br /> Management</h1>
            <p style={tex}>0 Jobs Available </p>
          </div>
          <div style={butstyle}>
            <img src={pageB6} alt='erreur' style={imgbutstyl} />
            <h1 style={titre}>Business &<br /> Consulting</h1>
            <p style={tex}>0 Jobs Available </p>
          </div>
          <div style={butstyle}>
            <img src={pageB7} alt='erreur' style={imgbutstyl} />
            <h1 style={titre}>Graphic <br /> Designer</h1>
            <p style={tex}>0 Jobs Available </p>
          </div>
          <div style={butstyle}>
            <img src={pageB8} alt='erreur' style={imgbutstyl} />
            <h1 style={titre}>Video <br /> Editor</h1>
            <p style={tex}>0 Jobs Available </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PageB