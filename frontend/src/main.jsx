import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Orders from './pages/Orders';
import Login from './pages/Login';
import './styles.css';

function HeaderRight(){
  const [user, setUser] = React.useState(null);
  React.useEffect(()=>{
    try{ const raw = localStorage.getItem('sfd_user'); if(raw) setUser(JSON.parse(raw)); }catch(e){}
  },[]);
  if(user) return (<div style={{marginLeft:'auto'}}><span style={{marginRight:12}}>Hi, {user.name||user.email}</span><button className='btn' onClick={()=>{ localStorage.removeItem('accessToken'); localStorage.removeItem('sfd_user'); window.location.reload(); }}>Logout</button></div>);
  return <div style={{marginLeft:'auto'}}><Link to='/login' className='btn'>Login</Link></div>;
}

function App(){
  return (
    <BrowserRouter>
      <header className='header'>
        <div className='brand'>SFD</div>
        <nav style={{marginLeft:12}}>
          <Link to='/' style={{marginRight:8}}>Home</Link>
          <Link to='/orders' style={{marginRight:8}}>Orders</Link>
        </nav>
        <HeaderRight />
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/restaurant/:id' element={<Restaurant/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
createRoot(document.getElementById('root')).render(<App />);
