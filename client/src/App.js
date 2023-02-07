// import React, { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// import AlertDialog from './Components/AlertDialog'
import TextField from '@mui/material/TextField';



import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function App() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const addTodo = ()=>{
      console.log("Todo Added")
  } 
  

  return (

   

    //change height to fit
    <div className=" bg-black h-screen w-full">
      <Navbar/>
      <div className='border h-fit min-h-screen w-full bg-blue-200  border px-4 py-4'>
        <div className=" flex justify-end ">
        <Fab color="primary" variant="extended" onClick={handleClickOpen}>
        
        <AddIcon />
        Add Todo
        
      </Fab>

<div >
<Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add a new TO-DO Task!"}
        </DialogTitle>
        <DialogContent>

          
        <TextField className="w-full md:w-96" id="outlined-basic"  variant="outlined" size="medium"/>


        </DialogContent>



        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
</div>
     
      
        </div>
         <Cards />
          {/* <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/> */}
          


      </div>

    </div>
  );
}

export default App;
