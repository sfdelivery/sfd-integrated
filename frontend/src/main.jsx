import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Orders from './pages/Orders';
import './styles.css';

function App(){
  return (
    <BrowserRouter>
      <header className='header'>
        <div className='brand'>SFD</div>
        <nav style={{marginLeft:12}}>
          <Link to='/' style={{marginRight:8}}>Home</Link>
          <Link to='/orders' style={{marginRight:8}}>Orders</Link>
        </nav>
        <div style={{marginLeft:'auto'}}>
          <a href='#' className='btn'>Login</a>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/restaurant/:id' element={<Restaurant/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
    </BrowserRouter>
  );
}
createRoot(document.getElementById('root')).render(<App />);
