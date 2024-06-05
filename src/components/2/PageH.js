import React, { useState, useEffect } from 'react';
import { div1Style, titleStyle2, h1D, div4, input1, option1, input, lab2, lab3, button, div3 } from './Style2'; // Adjusted import if needed
import img2 from './img2/div.png';
import './cssD.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function PageH() {
  const { id } = useParams(); // Retrieve id from URL path
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [profile, setProfile] = useState('');
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState(null); // State to hold validation errors
  const navigate = useNavigate();

  useEffect(() => {
  
    axios.get(`http://localhost:8000/api/CV/${id}`)
      .then(response => {
        const { companyName, email, phone, category, address, profile } = response.data;
        setCompanyName(companyName);
        setEmail(email);
        setPhone(phone);
        setCategory(category);
        setAddress(address);
        setProfile(profile);
      })
      .catch(error => console.error('Error fetching CV:', error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nom', companyName);    
    formData.append('email', email);          
    formData.append('phone', phone);          
    formData.append('catagorie', category);    
    formData.append('adress', address);        
    formData.append('profile', profile);       
    formData.append('candidat_id', id); // Include candidat_id with the form data
    if (photo) {
      formData.append('photo', photo);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/CV', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('CV created:', response.data);
      const CvId = response.data.id; // Assuming API response contains the ID

      navigate(`/signup/cvcandida/work/${CvId}`);

    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Handle validation errors
        setErrors(error.response.data.errors); // Assuming Laravel sends errors in 'errors' field
      } else {
        console.error('Error creating CV:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={div1Style}>
        <img src={img2} alt='error' style={titleStyle2} />
        <h1 style={{ ...h1D, top: "125px" }}>Create CV</h1>

        <div style={{ ...div4, marginTop: "185px" }}>
          <label style={{ ...lab2, top: "10px" }}>Company Name :</label><br />
          <input
            type='text'
            name='companyName'
            style={{ ...input, top: "30px" }}
            placeholder="Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          /><br />

          {errors && errors.nom && <p style={{ color: 'red' }}>{errors.nom[0]}</p>}

          <label style={{ ...lab3, top: "60px", width: "200px", marginLeft: "3px" }}>Email :</label><br />
          <input
            type='text'
            name='email'
            style={{ ...input1, top: "90px" }}
            placeholder="user@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />

          {errors && errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>}

          <label style={{ ...lab3, top: "140px", width: "200px", marginLeft: "3px" }}>PHONE :</label><br />
          <input
            type='text'
            name='phone'
            style={{ ...input1, top: "170px" }}
            placeholder="PHONE"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /><br />

          {errors && errors.phone && <p style={{ color: 'red' }}>{errors.phone[0]}</p>}

          <label style={{ ...lab3, top: "220px", width: "200px", marginLeft: "3px", paddingBottom: "33px" }}>Choose Categories :</label><br />
          <select
            name='category'
            style={{ ...input1, top: "250px", color: "#fff" }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option style={option1}>Categories</option>
            <option style={option1} value="Marketing & Communication">Marketing & Communication</option>
            <option style={option1} value="Finance Management">Finance Management</option>
            <option style={option1} value="UI / UX Design">UI / UX Design</option>
            <option style={option1} value="Project Management">Project Management</option>
            <option style={option1} value="Business & Consulting">Business & Consulting</option>
            <option style={option1} value="Graphic Designer">Graphic Designer</option>
            <option style={option1} value="Web Development">Web Development</option>
            <option style={option1} value="Video Editor">Video Editor</option>
          </select><br />

          {errors && errors.catagorie && <p style={{ color: 'red' }}>{errors.catagorie[0]}</p>}
        </div>

        <div style={{ ...div3, marginTop: "185px" }}>
          <label style={{ ...lab2, top: "10px" }}>Address :</label><br />
          <input
            type='text'
            name='address'
            style={{ ...input, top: "30px" }}
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          /><br />

          {errors && errors.adress && <p style={{ color: 'red' }}>{errors.adress[0]}</p>}

          <label style={{ ...lab3, top: "60px", width: "200px" }}>Profile :</label><br />
          <textarea
            name='profile'
            style={{ ...input1, top: "90px", width: "283px", height: "120px", resize: "none" }}
            placeholder="Profile"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />

          {errors && errors.profile && <p style={{ color: 'red' }}>{errors.profile[0]}</p>}

          <label style={{ ...lab3, top: "220px", width: "200px", marginLeft: "3px", paddingBottom: "33px" }}>Photo :</label><br />
          <label className="file">
            <input
              type="file"
              name="photo"
              style={{ ...input1, top: "250px" }}
              accept="image/*"
              aria-label="File browser example"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
            <span className="file-custom">Choose photo</span>
          </label>
        </div>

        <input
          type='submit'
          value={"next -->"}
          style={{ ...button, position: 'absolute', top: "460px", left: "970px" }}
        />
      </div>
    </form>
  );
}

export default PageH;
