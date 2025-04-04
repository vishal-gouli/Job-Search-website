import React, { useRef, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { featuredPosts,  } from './Data/Data.js';
import { Box, Container, Grid, Slider, TextField } from '@mui/material';
import Footer from './Footer.jsx';
import {NavLink, useParams} from 'react-router-dom'


const Jobsection = () => {
 
  let [state1,setState1] = useState("");
  let [state2,setState2] = useState("");

  let inpref = useRef();
  let {title} = useParams();
  title = title?title.replace("-", " "):""
  console.log("title1",title)

  let onchangeinp=(e)=>{
    let inpData = e.target.value;
        setState2(inpData);
  }
  
  let onclicking =()=>{
    setState1(state2)
  }

  return (
    <>
    <Box sx={{backgroundImage:'url("https://media.istockphoto.com/id/1388643874/photo/checklist.jpg?s=612x612&w=0&k=20&c=GDmE3YwpDxEIlovAFPDrFH2FZAVFZm0u7qNGrme802I=")',backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',height:"400px",marginTop:"20px",paddingTop:"20px"}}>
           <Container>
    <div>
        <Typography variant='h3' sx={{color:"white",backgroundColor:"blue",display:"inline",paddingRight:"550px",paddingLeft:"20px", paddingTop:"5px",paddingBottom:"5px"}}>Find great places to work</Typography><br/>
        <Box
        sx={{marginTop:2}}>
        <Typography variant='h6' sx={{color:"white",fontSize:"25px",backgroundColor:"blue",display:"inline",paddingRight:"350px",paddingLeft:"20px", paddingTop:"5px",paddingBottom:"5px"}}>Get access to millions of company reviews</Typography><br/>
        </Box>
        <Box
        sx={{marginTop:2}}>
      <Typography variant="h5" color='primary' sx={{color:"white",backgroundColor:"blue",display:"inline",paddingRight:"180px",paddingLeft:"20px", paddingTop:"5px",paddingBottom:"5px"}}>
        Search by Company Name or Job Title
      </Typography>
      <TextField
        id="search-input"
        placeholder="Enter company name or job title"
        variant="outlined"
        fullWidth
        margin="normal"
        ref={inpref}
        onChange={onchangeinp}
        sx={{
          '& .MuiInputBase-input::placeholder': {
            color: 'white', 
            opacity: 1, 
            fontSize:"17px",
            
          },
          border:'4px solid white'
        }}
        // sx={{color:"white",,color:"white"}}
      />
     <Button variant="contained" sx={{color:"white",backgroundColor:"black",marginTop:"10px",width:"200px",height:"50px",fontSize:"20px"}} onClick={onclicking}>Serach</Button>
    </Box>
    </div>
   </Container>
   </Box>

    <Grid container spacing={4} sx={{marginLeft:4}}>
      {
        !title ?
       featuredPosts.filter((item)=>{
        if(state1 == ""){
          return item;
        }else if(item.title.toLowerCase().includes(state1.toLowerCase())){
          return item;
        }
       }).
      map((post)=>{
     return(
    <NavLink to={`/jobdetail/${post.id}` }  style={{textDecoration:"none"}} >
    <Card sx={{ maxWidth: 345 ,marginTop:10,marginLeft:5,marginRight:5,}} key={post.id} >
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
       {post.description.slice(0,200)}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
 </NavLink>
     )
   }) :    featuredPosts.filter((item)=>{
          return item.title == title;
   }).
  map((post)=>{
 return(
<NavLink to={`/jobdetail/${post.id}` }  style={{textDecoration:"none"}} >
<Card sx={{ maxWidth: 345 ,marginTop:10,marginLeft:5,marginRight:5,}} key={post.id} >
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
   {post.description.slice(0,200)}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">Share</Button>
  <Button size="small">Learn More</Button>
</CardActions>
</Card>
</NavLink>
 )
})

  }

   </Grid>
   <Footer/>
    </>
  )
}

export default Jobsection