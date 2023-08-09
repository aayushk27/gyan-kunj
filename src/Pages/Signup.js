import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = ({ user, setUser }) => {
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Password:', password);
    console.log('Role:', role);
    console.log('Name:', name);

    console.log(user);
    navigate('/dashboard');

    //     //   if(success)
    //     //   // navigate
    //     // else
    //     // alert(either )

    // ... Rest of your logic ...
  };

  return (
    <div className="form">
      <button>
        <Link to="/">Back to Home</Link>
      </button>
      <h4>Sign Up </h4>
      <div className="login">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Button</button>
      </div>
    </div>
  );
};
export default Signup;
