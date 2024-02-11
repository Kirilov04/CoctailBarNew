import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoctailBarDetails from './components/CoctailBarDetails/CoctailBarDetails';
import CoctailBar from './components/CoctailBar/CoctailBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <Routes>
          <Route path="/" element={<CoctailBar/>} />
          <Route path="/:id" element={<CoctailBarDetails/>} />
    </Routes>
  </BrowserRouter>
);


