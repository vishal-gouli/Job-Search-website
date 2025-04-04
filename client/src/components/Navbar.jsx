import React from 'react'
import {AppBar,Stack,Toolbar, Typography} from "@mui/material"

const Navbar = () => {

  

  return (
    <AppBar sx={{backgroundColor:"white"}}>
      <Toolbar sx={{height:100}}>
    <Typography variant='h6' component='div' sx={{flexGrow:1}}>
           My MUi Nvbar
    </Typography>

    <Stack direction='row' spacing={10} sx={{marginRight:30}}>
          <button color='inherit'>Home</button>
          <button color='inherit'>About</button>
          <button color='inherit'>Contact</button>
    </Stack>

    </Toolbar>
    </AppBar>
  )
}

export default Navbar