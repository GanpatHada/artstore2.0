import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import { LoadingContext } from '../../context/LoadingContext';
export default function SimpleBackdrop() {
  const{open}=useContext(LoadingContext)
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress sx={{color:'orangered'}} />
      </Backdrop>
    </div>
  );
}