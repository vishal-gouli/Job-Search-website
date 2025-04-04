import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';
import ExploreIcon from '@mui/icons-material/Explore';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
// import { makeStyles } from '@mui/material/styles';
import { Container, Divider, IconButton, Toolbar, Typography,Badge, Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
  title:{
    flexGrow: 1,
  },
  tagline:{
    fontSize:20,
    textTransform:"uppercase",
    justifyContent:"center",
    fontFamily:"monserrat"
  }
}))



// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useNavigate} from 'react-router-dom'




const Header = () => {
  
  const classes = useStyles();

  const navigate = useNavigate();



  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,height:"200px"}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
          <ListItem  disablePadding onClick={()=>navigate('/SeracherDet')}>
            <ListItemButton>
              <ListItemText primary="Employee" />
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate('/')}>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate('/jobsection')}>
            <ListItemButton>
              <ListItemText primary="Jobs" />
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate('/cart')}>
            <ListItemButton>
              <ListItemText primary="Applied" />
            </ListItemButton>
          </ListItem>

      </List>
    </Box>
  );
  return (
    <>

   <Box sx={{backgroundColor:"white", color:"white",height:"100px",boxShadow:"2px 2px 2px black",opacity:'0.9'}}  >
        <Toolbar >
{/* 
          <IconButton color='primary' >
            <MenuIcon />
          </IconButton> */}


<div>
      <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer
        anchor={'left'} // or 'top', 'right', 'bottom'
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list('left')}
      </Drawer>
    </div>

          <Typography cariant="h6" className={classes.title} sx={{fontSize:"25px",color:"green",marginLeft:"40px"}}>JobSeach Website</Typography>

          <Box sx={{display:"flex"}}>
  {/* <ul> */}
    {/* <Box sx={{fontSize:"20px",marginRight:"60px",textDecoration:"none",color:"white",textUnderlineOffset:"none"}}>
    <NavLink to='/jobsection'  style={{textDecoration:"none",color:"black",fontWeight:700,fontSize:"20px"}}
    >JobSearch
    </NavLink>
    </Box>
    <Box sx={{fontSize:"20px",marginRight:"60px",textDecoration:"none",color:"white",textUnderlineOffset:"none"}}>
    <Link to='/cart' style={{textDecoration:"none",color:"black",fontWeight:700,fontSize:"20px"}}
    >Job Applied
    </Link>
    </Box> */}
  {/* </ul> */}
</Box>

          <IconButton color='primary' sx={{marginRight:"20px"}} onClick={()=>navigate('/notification')}>
          <Badge badgeContent={1} color="primary">
            <NotificationsIcon />
          </Badge>
          </IconButton>

          <IconButton color='primary' sx={{marginRight:"20px"}}  >
            <AccountCircleIcon />
          </IconButton>

        </Toolbar>
        {/* <Divider /> */}
        {/* <Toolbar className={classes.tagline} sx={{fontSize:"35px",fontWeight:500,color:"black"}}>  </Toolbar> */}

      {/* </Container> */}
      </Box>
    </>
  )
}

export default Header