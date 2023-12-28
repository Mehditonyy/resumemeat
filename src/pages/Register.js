import React, { useState } from 'react';

export default function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleRegister = () => {
    
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Register</h1>
      {/* Input box for username */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* Input box for password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Register button */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
  