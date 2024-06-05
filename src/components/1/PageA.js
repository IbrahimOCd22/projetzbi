import React from 'react';
import img2 from './img/title.png';
import img3 from './img/free.png';
import img4 from './img/log.png';
import { Link } from 'react-router-dom';
import { button2, button1, button22, button11, styleinscription, fin1, fin2, fin3, div1Style, div2Style, titleStyle, herroStyle, freeStyle, menuStyle, styleli, logoStyle, titrestyle, titr2estyle, titr1estyle, titr3estyle } from './StylePage';
import img5 from './img/herro.png';


function PageA() {

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
            <li style={styleli}><Link to={'/'} style={{ color: '#E6DF2A', textDecoration: 'none', }}>Home</Link></li>
            <li style={styleli}>
              <Link to={'/categorie'} style={{ color: col, textDecoration: st, }}
                onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
                onMouseLeave={() => { setCol("black"); setSt("none"); }}
              >
                Categories
              </Link>
            </li>
            <li style={styleli}><Link to={'/how'} style={{ color: coll, textDecoration: stt,width:"110px" }}
              onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
              onMouseLeave={() => { setColl("black"); setStt("none"); }}
            >How it work </Link></li>
          </ul>
        </nav>
        <img src={img5} alt='erreur' style={herroStyle} />
        <div style={titrestyle}>
          <h1 style={titr1estyle}>Find the job of your </h1><h1 style={titr2estyle}>Dreams</h1>
          <h6 style={titr3estyle}>Find Your New Job Today! New Job Postings
            Everyday just for you, browse the job you
            want and apply wherever you want</h6>
        </div>
        <div style={styleinscription}>
          <h1 style={fin1}>Join Most Well Known</h1>
          <h1 style={fin2}>Companies</h1>
          <h1 style={fin3}>Around The World</h1>
          <button style={button1}><Link style={button11} to={'/login'}>Login</Link></button>
          <button style={button2}><Link style={button22} to={'/signup'}>Sign up</Link></button>
        </div>
      </div>
    </div>
  );
}

export default PageA;
