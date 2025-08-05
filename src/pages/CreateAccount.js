import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './CreateAccount.css';

function CreateAccount() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', user: '', pass: '', confirm: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="page">
      <div className="card">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>
          <span style={{ color: 'black' }}>Create</span>
          <span style={{ color: '#ff6600' }}> Account</span>
        </h1>

        <div className="input-wrapper">
          <i className="fas fa-user icon"></i>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            placeholder="Full Name"
          />
        </div>

        <div className="input-wrapper">
          <i className="fas fa-envelope icon"></i>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Email"
          />
        </div>

        <div className="input-wrapper">
          <i className="fas fa-user-circle icon"></i>
          <input
            name="user"
            onChange={handleChange}
            value={form.user}
            placeholder="Username"
          />
        </div>

        <div className="input-wrapper">
          <i className="fas fa-lock icon"></i>
          <input
            name="pass"
            type="password"
            onChange={handleChange}
            value={form.pass}
            placeholder="Password"
          />
        </div>

        <div className="input-wrapper">
          <i className="fas fa-check-circle icon"></i>
          <input
            name="confirm"
            type="password"
            onChange={handleChange}
            value={form.confirm}
            placeholder="Confirm Password"
          />
        </div>

		<Button variant="primary" onClick={() => {
  const { name, email, user, pass, confirm } = form;
  if (name && email && user && pass && pass === confirm) {
    nav('/dashboard');
  } else {
    alert('Please fill all fields and match passwords');
  }
}}>
  Sign Up
</Button>


        <p>
          Already have an account?{' '}
          <span className="link" onClick={() => nav('/')}>
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
