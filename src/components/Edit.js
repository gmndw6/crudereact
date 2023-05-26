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
  const [age, setAge] = useState('');
  const [id, setId] = useState('');
  let history = useNavigate();

  
  var index = Employees.map(q => q.id).indexOf(id)
  const handleEdit = (event) => {
      event.preventDefault();
      
    var a = Employees[index];
    a.name= firstName;
    a.age = age;

    // Employees.push({name : a, age: b})
    console.log(Employees);

    history("/")
    // Reset form fields
    setFirstName('');
    setAge('');
  };
  useEffect(() => {
        setFirstName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setId(localStorage.getItem('id'))
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
          label="Age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
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