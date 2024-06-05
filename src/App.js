import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PageA from './components/1/PageA';
import PageB from './components/1/PageB';
import PageC from './components/1/PageC';

import PageD from './components/2/PageD';
import PageE from './components/2/PageE';
import PageF from './components/2/PageF';
import PageG from './components/2/PageG';
import PageH from './components/2/PageH';
import PageI from './components/2/PageI';
import PageJ from './components/2/PageJ';
import PageK from './components/2/PageK';

import PageL from './components/3/PageL';
import PageM from './components/3/PageM';
import PageN from './components/3/PageN';
import PageO from './components/3/PageO';
import PageP from './components/3/PageP';
import PageQ from './components/3/PageQ';
import PageR from './components/3/PageR';
import PageS from './components/3/PageS';
import PageV from './components/3/PageV';

import Profile from './components/2/Profile';
import Work from './components/2/Work';
import Lang from './components/2/Lang';
import Expen from './components/2/Expen';
import Education from './components/2/Education';



import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importez BrowserRouter

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/categorie" element={<PageB />} />
        <Route path="/how" element={<PageC />} />


        <Route path="/login" element={<PageD />} />
        <Route path="/signup" element={<PageE />} />
        <Route path="/signup/Employer" element={<PageF />} />
        <Route path="/signup/candida" element={<PageG />} />
        <Route path="/signup/cvcandida/:id" element={<PageH />} />
        <Route path="/signup/cvcandida/work/:id" element={<PageI />} />
        <Route path="/signup/cvcandida/Education/:id" element={<PageJ />} />
        <Route path="/signup/cvcandida/autre/:id" element={<PageK />} />


        <Route path="/login/candida/Profile" element={<PageL/>} />
        <Route path="/login/candida/cv" element={<PageN/>} />
        <Route path="/login/candida/jobs" element={<PageO/>} />
        <Route path="/login/candida/notices" element={<PageP/>} />
        <Route path="/login/candida/cv/edit" element={<PageQ/>} />
       

        <Route path="/login/Employer/Profile" element={<PageM/>} />
        <Route path="/login/Employer/demande" element={<PageR/>} />
        <Route path="/login/Employer/demande/More " element={<PageS/>} />
        <Route path="/login/Employer/offre" element={<PageV/>} />
       
       <Route path="/Profile" element={<Profile/>} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Lang" element={<Lang />} />
        <Route path="/Expen" element={<Expen />} />
        <Route path="/Education" element={<Education />} />

      </Routes>
    </BrowserRouter> 
  );
}

export default App;
