import React, { useEffect, useState } from 'react';
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

const Edit   = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [id, setId] = useState('');
  let history = useNavigate();

  
  var index = Employees.map(q => q.id).indexOf(id)
  const handleEdit = (event) => {
      event.preventDefault();
        
      var a = Employees[index];
      a.name= firstName;
      a.email = email;
      a.contactNumber = contactNumber

    // Employees.push({name : a, age: b})
    console.log(Employees);

    history("/")
    // Reset form fields
    setFirstName('');
    setEmail('');
    setContactNumber('');
  };
  useEffect(() => {
        setFirstName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
        setContactNumber(localStorage.getItem('contactNumber'))
  }, [])

  return (
    <FormContainer>
      <form onSubmit={handleEdit}>
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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <TextField
          label="Contact Number"
          value={contactNumber}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        </div>
        <div style={{display: 'flex', marginTop: '2rem'}}>
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Edit  ;