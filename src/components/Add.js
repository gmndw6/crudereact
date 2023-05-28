import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {v4 as uuid} from 'uuid';
import { Employees } from './Employees';
import { useNavigate } from 'react-router-dom';
const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const Add = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  let history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    var uniqueId = Employees.length + 1
    var a = firstName;
    var b= email;
    var c = contactNumber

    Employees.push({id: uniqueId.toString(), name : a, email: b, contactNumber: c})
    console.log(Employees);

    history("/")
    // Reset form fields
    setFirstName('');
    setEmail('');
    setContactNumber('');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        </div>
        <div style={{marginTop: '2rem'}}>
        <TextField
          label="Email"
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <TextField
          label="Contact Number"
          type='number'
          value={contactNumber}
          onChange={(event) => setContactNumber(event.target.value)}
          required
        />
        </div>
        <div style={{display: 'flex', marginTop: '2rem'}}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Add;