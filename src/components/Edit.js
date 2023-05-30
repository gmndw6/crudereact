import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Employees } from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import { Box } from '@mui/material';

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

    Swal.fire('Success', 'The user successfully edited.', 'success').then(result =>{
      history("/")
  })
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
      <Box sx={{margin: '1rem', fontSize: '2rem'}}>Edit Contact</Box>
      <form onSubmit={handleEdit}>
      <div>
          <TextField
            label="Id"
            value={id}
            inputProps={{ readOnly: true }}
          />
        </div>
        <div style={{marginTop: '2rem'}}>
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
          <Button type="submit" variant="contained" color="success">
            Save
          </Button>
          <Link to='/'>
              <Button style={{marginLeft:'0.5rem'}} variant="contained" color="error">
                  Back
              </Button>
              </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default Edit  ;