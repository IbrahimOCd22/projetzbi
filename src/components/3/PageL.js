import React, { useState } from 'react';
import { div1Style, div4Style, logoStyle, menuStyle, styleli, navs, divL, divL1, imgL, h1L, divL2, divL3, butL1, inp, tr, td, h6td, ptd, buttd1, buttd2, thed, th, table, tbody, fot } from './Style3';
import img4 from './img/log.png';
import { Link } from 'react-router-dom';
import img7 from './img/img3.png';
import ReactPaginate from 'react-paginate'; // Added import
import './cssL.css';

function PageL() {
  const [col, setCol] = useState("#AAA7C1"); // Added useState
  const [st, setSt] = useState("none"); // Added useState
  const [coll, setColl] = useState("#AAA7C1"); // Added useState
  const [stt, setStt] = useState("none"); // Added useState
  const [coli, setColi] = useState("#AAA7C1"); // Added useState
  const [sti, setSti] = useState("none"); // Added useState
  const itemsPerPage = 5; // Added itemsPerPage
  const [itemOffset, setItemOffset] = useState(0);

  const items = [
    {
      email: "emily.brown@email.com", name: "Justin Septimus",

      ANSWER: "in Progress",
      POST: "Développeur Mobile",
      SALARY: "9000 MAD",

    },
    {
      name: "John Doe",
      email: "emily.brown@email.com",
      ANSWER: "Completed",
      POST: "Web Developer",
      SALARY: "8000 MAD",
    },
    {
      name: "Jane Smith",
      email: "emily.brown@email.com",
      ANSWER: "Pending",
      POST: "UI/UX Designer",
      SALARY: "8500 MAD",
    },
    {
      name: "Alex Johnson",
      email: "emily.brown@email.com",
      ANSWER: "Cancelled",
      POST: "Software Engineer",
      SALARY: "9500 MAD",
    },
    {
      name: "Emily Brown",
      email: "emily.brown@email.com",
      ANSWER: "in Progress",
      POST: "Data Analyst",
      SALARY: "9200 MAD",
    },
    {
      name: "Michael Smith",
      email: "emily.brown@email.com",
      ANSWER: "Completed",
      POST: "Front-end Developer",
      SALARY: "8500 MAD",
    },
    {
      name: "Jessica Johnson",
      email: "emily.brown@email.com",
      ANSWER: "Pending",
      POST: "Back-end Developer",
      SALARY: "9300 MAD",
    },
    {
      email: "emily.brown@email.com", name: "Justin Septimus",

      ANSWER: "in Progress",
      POST: "Développeur Mobile",
      SALARY: "9000 MAD",

    },
    {
      name: "John Doe",
      email: "emily.brown@email.com",
      ANSWER: "Completed",
      POST: "Web Developer",
      SALARY: "8000 MAD",
    },
    {
      name: "Jane Smith",
      email: "emily.brown@email.com",
      ANSWER: "Pending",
      POST: "UI/UX Designer",
      SALARY: "8500 MAD",
    },
    {
      name: "Alex Johnson",
      email: "emily.brown@email.com",
      ANSWER: "Cancelled",
      POST: "Software Engineer",
      SALARY: "9500 MAD",
    },
    {
      name: "Emily Brown",
      email: "emily.brown@email.com",
      ANSWER: "in Progress",
      POST: "Data Analyst",
      SALARY: "9200 MAD",
    },
    {
      name: "Michael Smith",
      email: "emily.brown@email.com",
      ANSWER: "Completed",
      POST: "Front-end Developer",
      SALARY: "8500 MAD",
    },
    {
      name: "Jessica Johnson",
      email: "emily.brown@email.com",
      ANSWER: "Pending",
      POST: "Back-end Developer",
      SALARY: "9300 MAD",
    }
  ];

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <tr style={tr} key={i}>
              <td style={td}><h6 style={h6td}>{item.name}</h6><p style={ptd}>{item.email}</p></td>
              <td style={td}><button style={{ ...buttd1, color: "orange" }}>{item.ANSWER}</button></td>
              <td style={td}><h6 style={h6td}>{item.POST}</h6></td>
              <td style={td}><h6 style={h6td}>{item.SALARY}</h6>  <p style={{ ...ptd, paddingLeft: "9px" }}>MAD</p></td>
              <td style={td}><button style={buttd2}>Cancel</button></td>
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
            <li style={styleli}><Link to={'/login/candida/Profile'} style={{ color: '#E6DF2A', textDecoration: 'none', }}>Profile</Link></li>
            <li style={styleli}>
              <Link to={'/login/candida/cv'} style={{ color: col, textDecoration: st, }}
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
          <div style={divL1}> <h1 style={h1L}>Dmitry Kargaev</h1></div>
          
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
