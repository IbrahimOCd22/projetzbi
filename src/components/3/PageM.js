import React from 'react';
import { div1Style, div4Style, logoStyle, menuStyle, styleli, navs } from './Style3';
import img4 from './img/log.png';
import { Link } from 'react-router-dom';

function PageM() {
  const [col, setCol] = React.useState("#AAA7C1");
  const [st, setSt] = React.useState("none");
  const [coll, setColl] = React.useState("#AAA7C1");
  const [stt, setStt] = React.useState("none");
  const [coli, setColi] = React.useState("#AAA7C1");
  const [sti, setSti] = React.useState("none");
  return (
    <div style={div1Style}>
      <div style={div4Style}>
        <nav style={navs}>
          <img src={img4} alt='logo' style={logoStyle} />
          <ul style={menuStyle}>
            <li style={styleli}><Link to={'/login/Employer/Profile'} style={{ color: '#E6DF2A', textDecoration: 'none', }}>Profile</Link></li>
            <li style={styleli}>
              <Link to={'/login/Employer/offre'} style={{ color: col, textDecoration: st, }}
                onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
                onMouseLeave={() => { setCol("#AAA7C1"); setSt("none"); }}>Offrers</Link>
            </li>
            <li style={styleli}><Link to={'/login/Employer/demande'} style={{ color: coll, textDecoration: stt }}
              onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
              onMouseLeave={() => { setColl("#AAA7C1"); setStt("none"); }}>Demand</Link></li>

          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PageM ;
