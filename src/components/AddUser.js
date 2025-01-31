import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/users', user);
    navigate('/');
  };

  return (
    <div>
      <h2>Add User</h2><Link to={'/'}>Home</Link>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;