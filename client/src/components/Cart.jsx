import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { featuredPosts,  } from './Data/Data.js';
import { Box, Container, Grid, Slider, TextField } from '@mui/material';
import Footer from './Footer.jsx';
import { useSelector } from 'react-redux';


const Cart = () => {

    const {cartArray} = useSelector(item=>item.cart)
    console.log("cartArrya", cartArray)
// let data = cartArray?cartArray:{name:"nothing"}
// console.log("data",data);


 
  return (
    <>
    
    <Grid container spacing={4} sx={{marginLeft:4,minHeight:"800px"}}>
    {
       cartArray?cartArray.map((post)=>{
     return(
    // <NavLink to={`/jobdetail/${post.id}` }    >
    <Card sx={{ maxWidth: 345 ,maxHeight:"450px",marginTop:10,marginLeft:5,marginRight:5}} key={post.id} >
    <CardMedia
      sx={{ height: 200 }}
      image={post.image}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" >
       {post.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary',textDecoration:'none'}}>
       {post.description?post.description.slice(0,200):post.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
//  </NavLink>
     )
   })
  :  <Typography variant='h2'>No Results Found</Typography>}
   </Grid>
   <Footer/>
    </>
  )
}

export default Cart