import React, { useEffect, useState } from 'react';
import api from '../api';
export default function Orders(){ const [orders,setOrders]=useState([]); useEffect(()=>{ api.get('/orders').then(r=>setOrders(r.data)).catch(()=>{}); },[]); return (<div className='container'><h2>My Orders</h2>{orders.length===0 ? <div className='card muted'>No orders yet</div> : orders.map(o=>(<div key={o.id} className='card' style={{marginBottom:8}}><div style={{fontWeight:700}}>Order #{o.id}</div><div className='muted'>Total: ₹{o.total_amount}</div></div>))}</div>);
}
