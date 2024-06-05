import React from 'react';
import { div1Style, div4Style, logoStyle, menuStyle, styleli, navs, divL, imgL, divL7, div4, div44, imgpr, h11, p11, imgLl, p111, p112, bord, ppp, im11, alll, ppll, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12 ,e13,e14} from './Style3';
import img4 from './img/log.png';
import { Link } from 'react-router-dom';
import img7 from './img/img3.png';
import img77 from './img/edit.jpeg';
import r11 from './img/1.jpeg';
import r12 from './img/2.jpeg';
import r13 from './img/3.jpeg';
import { Button } from 'bootstrap';

function PageN() {
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
            <li style={styleli}><Link to={'/login/candida/Profile'} style={{ color: col, textDecoration: st, }}
              onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
              onMouseLeave={() => { setCol("#AAA7C1"); setSt("none"); }}>Profile</Link></li>
            <li style={styleli}>
              <Link to={'/login/candida/cv'} style={{ color: '#E6DF2A', textDecoration: 'none', }}>CV</Link>
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
          <div style={divL7}>
            <img src={img7} style={imgpr} alt="img" />
            <h1 style={h11}> PROFILE :</h1><Link to={'/login/candida/cv'}><p style={{fontSize:"33px",position:"relative", left: "1190px", bottom: '290px' , color:"black"}}>X</p></Link>
            <p style={p11}>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooooo</p>
            <Link to={"/Profile"} >
              <img style={{ ...imgLl, top: "-150px", left: "1070px" }} src={img77} alt="img" />
            </Link>
            <p style={p111}>profile</p>
            <p style={p112}>nom </p>

            <div style={alll}>
              <div style={bord}>
                <img src={r11} style={im11} />  <p style={ppp}>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
              </div>
              <div style={bord}>
                <img src={r12} style={im11} />  <p style={ppp}>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
              </div>
              <div style={bord}>
                <img src={r13} style={im11} />  <p style={ppp}>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
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
                <div style={{ display: 'flex' }}>
                  <h1 style={e4}>Blue Moon Consultancy Studio</h1>
                  <Link to={"/Education"} style={e12}><a>Edite</a></Link>   <Link to={""} style={e11}><a>Delete</a></Link>
                </div>
                <h2 style={e5}>Seniour UI designer</h2>
                <p style={e6}>Aug 2020 - Present - 1 year, New York</p>
                <p style={e7}>Lead the UI design with the accountability of the design system, collaborated with product and development teams on core projects to improve product interfaces and experiences.</p>

              </div>
              <Link to={"/Education"} ><button style={e13}>+</button> </Link>

              <div style={e1}>
                <p style={e2}>  Languages</p>
              </div>
              <hr style={e3} />
              <div style={e8}>
                <pre>
                  <div style={{ display: 'flex' }}>
                    <p style={ppll}>HTML         : Native</p> <Link to={"/Lang"} style={e12}><a>Edite</a></Link>   <Link to={""} style={e11}><a>Delete</a></Link>
                  </div>
                </pre>
                <Link to={"/Lang"} ><button style={e14}>+</button> </Link>

              </div>

            </div>


          </div>

          <div style={div44}>
            <div >
              <div style={e9}>
                <p style={e10}>  EXPERIENCE </p>
              </div>
              <hr style={e3} />
              <div style={{ left: "30px", position: "relative", width: "500px" }}>

                <div style={{ display: 'flex' }}>
                  <h1 style={e4}>Blue Moon Consultancy Studio</h1>
                  <Link to={"/Work"} style={e12}><a>Edite</a></Link>   <Link to={""} style={e11}><a>Delete</a></Link>
                </div>
                <h2 style={e5}>Seniour UI designer</h2>
                <p style={e6}>Aug 2020 - Present - 1 year, New York</p>
                <p style={e7}>Lead the UI design with the accountability of the design system, collaborated with product and development teams on core projects to improve product interfaces and experiences.</p>
              </div>
              <Link to={"/Work"} ><button style={{ background: "#E6DE29", color: "#fff", width: "50px", height: "30px", borderRadius: "10px", fontSize: "18px", fontWeight: "900", border: 'none', marginBottom: "20px", marginLeft: "50px" }}>+</button> </Link>


              <div style={{ borderRadius: "10px", background: "#fff", width: "300px", height: "50px", top: "30px", left: "30px", position: "relative" }}>
                <p style={e10}>  EXPERTISE</p>
              </div>
              <hr style={e3} />
              <div style={e8}>
                <pre>
                  <div style={{ display: 'flex' }}>
                    <p style={ppll}>HTML         : Native</p> <Link to={"/Expen"} style={e12}><a>Edite</a></Link>   <Link to={""} style={e11}><a>Delete</a></Link>
                  </div>
                </pre>
                <Link to={"/Expen"} ><button style={{ background: "#E6DE29", color: "#fff", width: "50px", height: "30px", borderRadius: "10px", fontSize: "18px", fontWeight: "900", border: 'none', marginBottom: "40px" }}>+</button> </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default PageN;
