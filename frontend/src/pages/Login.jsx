import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function Login(){
  const [email, setEmail] = useState('demo@demo.com');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function submit(e){
    e.preventDefault();
    setLoading(true);
    try{
      const res = await api.post('/auth/login', { email, password });
      const token = res.data.accessToken;
      const user = res.data.user;
      localStorage.setItem('accessToken', token);
      localStorage.setItem('sfd_user', JSON.stringify(user));
      alert('Login successful — ' + (user && user.name ? user.name : 'Demo'));
      navigate('/');
    }catch(err){
      console.error(err);
      const msg = err?.response?.data?.error || 'Login failed';
      alert(msg);
    }finally{ setLoading(false); }
  }

  return (
    <div className="container" style={{paddingTop:20}}>
      <div className="card" style={{maxWidth:420, margin:'0 auto'}}>
        <h2>Login</h2>
        <form onSubmit={submit}>
          <div style={{marginBottom:8}}>
            <label style={{display:'block', marginBottom:6}}>Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%', padding:8}} />
          </div>
          <div style={{marginBottom:8}}>
            <label style={{display:'block', marginBottom:6}}>Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%', padding:8}} />
          </div>
          <div style={{display:'flex', gap:8}}>
            <button className="btn" type="submit" disabled={loading}>{loading ? 'Logging...' : 'Login'}</button>
            <button type="button" onClick={()=>{ setEmail('demo@demo.com'); setPassword('password'); }}>Fill demo</button>
          </div>
        </form>
      </div>
    </div>
  );
}
