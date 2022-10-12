import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import reportWebVitals from './reportWebVitals';
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Formules from './pages/formules';
import Contact from './pages/contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BreakpointProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formules" element={<Formules />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </BreakpointProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
