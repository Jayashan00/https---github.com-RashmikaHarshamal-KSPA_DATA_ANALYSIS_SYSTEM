import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './Login.css';

function Login() {
  const nav = useNavigate();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="page">
      <div className="card">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>
  <span style={{ color: 'black' }}>Log</span>
  <span style={{ color: '#ff6600' }}>In</span>
</h1>


        <div className="input-wrapper">
          <i className="fas fa-user icon"></i>
          <input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            placeholder="Id"
          />
        </div>

        <div className="input-wrapper">
          <i className="fas fa-lock icon"></i>
          <input
            type="password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            placeholder="Password"
          />
        </div>

        <Button onClick={() => {
  if (user && pass) {
    nav('/dashboard');
  } else {
    alert('Please enter both ID and Password');
  }
}}>
  Login
</Button>


        <p>
          Don’t have an account?{' '}
          <span className="link" onClick={() => nav('/create-account')}>
            Create One
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
