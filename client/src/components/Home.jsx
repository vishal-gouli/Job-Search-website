import React from 'react'
import FeaturedPost from './FeaturedPost';
import PostCards from './PostCards';
import { Container, Grid, Slider } from '@mui/material';
import { featuredPosts,  } from './Data/Data.js';
import Main from './Main.jsx';
import Header from './Header.jsx';
import { ThemeProvider, createMuiTheme, createTheme } from '@mui/material/styles';
import {makeStyles} from '@mui/styles'
import Footer from './Footer.jsx';

const useStyles = makeStyles((theme)=>({
    mainGrid:{
     // marginTop:theme.spacing(3)
    },
 }))

const Home = () => {

  
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    
      let classes = useStyles();

  return (
    <>
    
    <FeaturedPost/>
    <br />
  {/* <Container> */}
 
 {/* <Grid container spacing={4} > */}
    <PostCards  />
   {/* </Grid> */}

   <Grid container spacing={5} className={classes.mainGrid}>
     <Main title="something random" />
     {/* <Slidebar title={sidebar.title} description={sidebar.description} archieves={sidebar.archives} social={sidebar.social}  /> */}
   </Grid>
   <Footer/>
   </>
  )
}

export default Home