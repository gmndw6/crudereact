import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { Employees } from './Employees'
import { useNavigate, Link } from 'react-router-dom';
import Button from './Button';
import Create from './Create';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function Home() {
      const [employee, setEmployee] = useState(Employees)
      const history = useNavigate();

      const handleEdit = (id , name, age) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
      }

      const handleDelete = (id) => {
          var isDelete =  employee.map(function(e){
            return e.id
          }).indexOf(id)

          employee.splice(isDelete, 1);
          history('/');
      }

  return (
    <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Age</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                employee && employee.length > 0 
                ?
                employee.map((item) => (
                <StyledTableRow 
                    key={item.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <StyledTableCell>{item.name}</StyledTableCell>
                    <StyledTableCell>{item.age}</StyledTableCell>
                    <StyledTableCell>
                        <RemoveRedEyeIcon onClick={() => alert('View')} style={{ color: '#288BA8' }}/>
                        <Link to={'/edit'}>
                        <ModeEditOutlineIcon onClick={() => handleEdit(item.id, item.name, item.age)}/>
                        </Link>
                        <DeleteIcon onClick={() => handleDelete(item.id)} style={{ color: '#E83845' }}/>
                    </StyledTableCell>
                </StyledTableRow>
                ))
                :
                <StyledTableRow 
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <StyledTableCell>NO DATA</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                </StyledTableRow>
            }
            </TableBody>
            </Table>
        </TableContainer>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
            <Link to={'/add'}>
            <Button name={'Create'}/>
            </Link>
        </div>
        </div>
    )
}

export default Home
