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
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, TablePagination, Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';
import Swal from 'sweetalert2'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


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
      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(5);
      const history = useNavigate();
      
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
      };

      const handleEdit = (id , name, email, contactNumber) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('contactNumber', contactNumber)
      }
      const handleView = (id , name, email, contactNumber) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('contactNumber', contactNumber)
      }
      
      const handleDelete = (id) => {
          var isDelete =  employee.map(function(e){
            return e.id
          }).indexOf(id)
         
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'primary',
              cancelButton: 'secondary'
            },
            buttonsStyling: true
          })
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              employee.splice(isDelete, 1);
              history("/")    
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary data is safe :)',
                'error'
              )
            }
          })
      }

      const startIndex = page * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      const paginatedData = employee.slice(startIndex, endIndex);

  return (
    <div>
       <Box sx={{ margin: '1rem'}}>
            <Link to={'/add'}>
              <Button  variant="contained" color="primary">
                <span style={{display: 'flex', alignItems: 'center', marginRight: '4px'}}><PersonAddIcon/></span>
                 Add Contact</Button>
            </Link>
        </Box>
            <TableContainer component={Paper}>
            <Table sx={{ "& tbody tr:hover": { backgroundColor: '#e0e0e0', minWidth: 200 } }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Contact Number</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                paginatedData && paginatedData.length > 0 
                ?
                paginatedData.map((item) => (
                <StyledTableRow 
                    key={item.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell>{item.id}</StyledTableCell>
                    <StyledTableCell>{item.name}</StyledTableCell>
                    <StyledTableCell>{item.email}</StyledTableCell>
                    <StyledTableCell>{item.contactNumber}</StyledTableCell>
                    <StyledTableCell>
                      <Link to={'/view'}>
                      <Tooltip title="View" TransitionComponent={Fade} TransitionProps={{ timeout: 400 }} placement="top-start">
                        <RemoveRedEyeIcon onClick={() => handleView(item.id, item.name, item.email, item.contactNumber)} style={{ color: '#808080' }}/>
                      </Tooltip>
                      </Link>
                        <Link to={'/edit'}>
                        <Tooltip title="Edit" TransitionComponent={Fade} TransitionProps={{ timeout: 400 }} placement="top-start">
                        <ModeEditOutlineIcon  style={{ color: '#288BA8' }} onClick={() => handleEdit(item.id, item.name, item.email, item.contactNumber)}/>
                        </Tooltip>
                        </Link>
                        <Tooltip title="Delete" TransitionComponent={Fade} TransitionProps={{ timeout: 400 }} placement="top-start">
                        <DeleteIcon onClick={() => handleDelete(item.id)} style={{ color: '#E83845' }}/>
                        </Tooltip>
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
        <Box sx={{display:'flex', justifyContent:'center', marginTop: '0.5rem'}}>
          {/* //<Stack spacing={2}> */}
              <TablePagination
               count={employee.length}
               color="primary"
               page={page}
               onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]} // Customize the available options
              labelRowsPerPage="Rows per page"
               />
          {/* //</Stack> */}
        </Box>
        </div>
    )
}

export default Home
