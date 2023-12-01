import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
    const [registrationStatus, setRegistrationStatus] = useState(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      setRegistrationStatus('success');
  };

  return (
    <div>
       <h2>Contact Page</h2>
      {registrationStatus === 'success' && (
        <p style={{ color: 'green' }}>Registration Successful!</p>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined" 
          margin="normal"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Contact;
