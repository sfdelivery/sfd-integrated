const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;

let restaurants = [
  { id:1, name:'Pizza Hut', avg_rating:4.3, eta:'50-60 mins', cuisine:'Pizzas, Fast Food', image:'https://images.unsplash.com/photo-1601924582975-5f5a4a648f1b?auto=format&fit=crop&w=1200&q=80', offer:'ITEMS AT ₹99' },
  { id:2, name:'Bakery World', avg_rating:4.2, eta:'45-50 mins', cuisine:'Bakery, Snacks', image:'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80', offer:'ITEMS AT ₹99' },
  { id:3, name:'Dev International', avg_rating:4.3, eta:'50-60 mins', cuisine:'Chinese, Fast Food', image:'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80', offer:'₹100 OFF ABOVE ₹299' }
];

let orders = [];
const demoUser = { id:1, name:'Demo Customer', email:'demo@demo.com', password:'password' };

app.get('/health', (req,res)=> res.json({ok:true}));
app.get('/api/restaurants', (req,res)=> res.json(restaurants));
app.post('/api/auth/login', (req,res)=> {
  const { email, password } = req.body;
  if(email === demoUser.email && password === demoUser.password){
    return res.json({ accessToken: 'demo-token-123', user: { id: demoUser.id, name: demoUser.name, email: demoUser.email }});
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});
app.get('/api/orders', (req,res)=> res.json(orders));
app.post('/api/orders', (req,res)=> {
  const { customer_id, restaurant_id, items_json, total_amount } = req.body;
  if(!customer_id) return res.status(400).json({ error: 'customer_id required' });
  const id = orders.length ? (orders[0].id + 1) : 1001;
  const order = { id, customer_id, restaurant_id, items: items_json || [], total_amount, status:'placed', createdAt: new Date().toISOString() };
  orders.unshift(order);
  return res.json(order);
});
app.listen(PORT, ()=> console.log('Backend running on port', PORT));
