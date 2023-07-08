import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './photos/logo.png';
import Stack from '@mui/material/Toolbar';
import { Link } from "react-router-dom";


export default function NavBar() {
    const logoStyle = {
        width: "45vh",
        height: "auto",
        marginRight: "10px",
        marginTop:'-25px',
        marginBottom:'-30px',
      };

      const btnStyle = {
        textTransform: 'unset !important', 
        fontSize: '26px',
        fontWeight: 200, 
        fontFamily: 'sans-serif', 
        borderRadius: '0px',
        color: 'white',
        px: '5px',
        '&:hover': {
           color: '#401E46',
           backgroundColor: '#F2F2F2',
        },
     }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black', height:'15vh'}}>
        <Toolbar sx={{ height: '100%', justifyContent: 'space-between' }}>
        <Link to='/home'>
        <img src={logo} alt="Logo" style={logoStyle} />
        </Link>
        <Stack spacing={0} direction="row" sx=
               {{ display: { xs: "none", sm: "block" } ,
               color: "main",
               fontFamily: "Montserrat",
          
                }
               }>
                     <Button sx={{...btnStyle, px: "22px"}} >
                        Research 
                     </Button>
                     <Link to='/about'>
                     <Button sx={{...btnStyle, px: "22px"}}>
                        Lab Members
                     </Button>
                     </Link> 
                     <Button sx={{...btnStyle, px: "22px"}}>
                        News 
                     </Button>
                     <Button sx={{...btnStyle, px: "22px"}}>
                        Opportunities 
                     </Button>
                </Stack> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}