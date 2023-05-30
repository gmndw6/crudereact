import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {v4 as uuid} from 'uuid';
import { Employees } from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Box } from '@mui/material';

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

    Swal.fire({
      title: 'User Successfully Added.',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url("https://media.istockphoto.com/id/1391907030/vector/abstract-simply-background-with-natural-line-arts-summer-theme.jpg?s=612x612&w=0&k=20&c=58U5UHPi96BYEHlJGggk-QDc8MBque_XaTGWYSPVzRQ=")',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media3.giphy.com/media/blEl99OgPQnNS/giphy.gif?cid=6c09b952epxhqe04djv30wzi71r9ejksi77db389lcwr2pxi&ep=v1_gifs_search&rid=giphy.gif&ct=g")
        left top
        no-repeat
      `
    }).then(result =>{
    history("/")
  })
    // Reset form fields
    setFirstName('');
    setEmail('');
    setContactNumber('');
  };

  return (
    <FormContainer>
      <Box sx={{margin: '1rem', fontSize: '2rem'}}>Create Contact</Box>
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
        </div>
        <div style={{marginTop: '2rem'}}>
        <TextField
          label="Contact Number"
          type='number'
          value={contactNumber}
          onChange={(event) => setContactNumber(event.target.value)}
          required
        />
        </div>
        <div style={{display: 'flex', marginTop: '2rem'}}>
        <Button type="submit" variant="contained" color="success">
          Save
        </Button>
        <Link to='/'>
            <Button style={{marginLeft:'0.5rem'}}  variant="contained" color="error">
                Back
            </Button>
        </Link>
        </div>
        
      </form>
    </FormContainer>
  );
};

export default Add;