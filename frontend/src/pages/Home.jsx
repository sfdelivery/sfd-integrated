import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
export default function Home(){ const [rests,setRests]=useState([]); const [loading,setLoading]=useState(true);
  useEffect(()=>{ api.get('/restaurants').then(r=>setRests(r.data)).catch(()=>{}).finally(()=>setLoading(false)); },[]);
  return (<div className='container'><h2>Restaurants</h2>{loading? <div className='muted'>Loading...</div> : (<div className='rest-grid'>{rests.map(r=>(<div className='card rest-card' key={r.id}><img src={r.image} alt='' /><div style={{padding:10}}><div style={{fontWeight:700}}><Link to={'/restaurant/'+r.id}>{r.name}</Link></div><div className='muted'>⭐ {r.avg_rating} • {r.eta}</div></div></div>))}</div>)}</div>);
}
