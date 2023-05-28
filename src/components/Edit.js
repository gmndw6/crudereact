import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Employees } from './Employees';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const Edit   = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [id, setId] = useState('');
  let history = useNavigate();
  
  var index = Employees.map(q => q.id).indexOf(id)
  const handleEdit = (event) => {
      event.preventDefault();
        
      var a = Employees[index];
      a.name= name;
      a.email = email;
      a.contactNumber = contactNumber

    console.log(Employees);

    history("/")
    // Reset form fields
    setName('');
    setEmail('');
    setContactNumber('');
  };
  useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
        setContactNumber(localStorage.getItem('contactNumber'))
  }, [])

  return (
    <FormContainer>
      <form onSubmit={handleEdit}>
        <div>
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
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
        </div>
        <div style={{marginTop: '2rem'}}>
        <TextField
              label="Contact Number"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
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