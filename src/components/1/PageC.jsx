import React from 'react';
import img2 from './img/title.png';
import img3 from './img/free.png';
import img4 from './img/log.png';
import { Link } from 'react-router-dom';
import { parastyleC,parac,h1c,pc, h1style2, divC, pageCStyle7, pageCStyle8, pageCStyle9, div1Style, div2Style, titleStyle, freeStyle, menuStyle, styleli, logoStyle } from './StylePage';
import img7 from './img/paceC/a.png';
import img9 from './img/paceC/b.png';
import img8 from './img/paceC/c.png';


function PageC() {
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
            <li style={styleli}><Link to={'/'} style={{ color: col, textDecoration: st, }}
              onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
              onMouseLeave={() => { setCol("black"); setSt("none"); }}
            >Home</Link></li>
            <li style={styleli}>
              <Link to={'/categorie'} style={{ color: coll, textDecoration: stt, }}
                onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
                onMouseLeave={() => { setColl("black"); setStt("none"); }}
              >
                Categories
              </Link>
            </li>
            <li style={styleli}><Link to={'/how'} style={{ color: '#E6DF2A', textDecoration: 'none',width:"120px"  }}

            >How it works</Link></li>
          </ul>
        </nav>
        <strong><h1 style={h1style2} >Easy Steps To Find and <br />Apply Your Dream Job</h1></strong>
        <p style={parastyleC}>We will help you find your dream to job easily, let us <br /> help you manage everything you need</p>
        <img src={img8} alt='erreur' style={pageCStyle8} />
        <img src={img9} alt='erreur' style={pageCStyle9} />
        <img src={img7} alt='erreur' style={pageCStyle7} />
        <div style={divC}>
          <div style={parac}>
            <h1 style={h1c}>Craft Your Professional cv</h1>
            <p style={pc}>Complete a form in order to generate a <br />professional resume for submission to  <br />employers</p>
          </div>
          <div style={parac}>
            <h1 style={h1c}>You Will Be Notified With All Updates</h1>
            <p style={pc}>Get notified about new job vacancies. scheduled <br />interview and job application</p>
          </div>
          <div style={parac}>
            <h1 style={h1c}>Apply for your dream job from the best <br />company</h1>
            <p style={pc}>We will provide recommendations for your <br />choice companies from all over the world</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageC