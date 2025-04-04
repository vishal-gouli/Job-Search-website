// import React from 'react'
import { featuredPosts } from './Data/Data';
import {NavLink, useParams} from 'react-router-dom'
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
import { Box, Button, Container, FormControl, FormLabel, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { addCart } from './redux/slices/slice.js';

import { addNotify } from './redux/slices/notifySlice.js';

import * as Yup from 'yup';
import {useFormik} from 'formik'
import axios from 'axios'
import { toast } from 'react-toastify';



// import { Box, Container, Grid, Slider, TextField } from '@mui/material';


const Jobdetail = () => {

  let signupschema = Yup.object({
    name:Yup
    .string().min(2).max(10).required("cant be kept vacant name"),
    email:Yup
    .string().min(2).max(10).required("cant be kept vacant contact"),
    phone:Yup
    .number().required("cant be kept vacant phone No"),
    education:Yup
    .string().min(2).max(10).required("cant be kept vacant education"),
    collage:Yup
    .string().min(2).max(10).required("cant be kept vacant collage"),
  })

  let initialValues={
    name:"",email:"" ,phone:"",education:"",collage:""
  }
  
  
  let {errors,values,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signupschema,
    onSubmit:(values)=>{
      let data = axios.post('http://localhost:7000/api/create',values);
      setState1(!state1)
      alert("data successfully stored")
    }
  })
  // console.log(errors.name?errors.name:"")
  // console.log(errors.email?errors.email:"")
  // console.log(errors.phone?errors.phone:"")
  // console.log(errors.education?errors.education:"")
  // console.log(errors.collage?errors.collage:"")


  let dispatch = useDispatch();

    let {id} = useParams();

    let [state1,setState1] = useState(false);
    
          let applying =()=>{
             setState1(!state1);
          }


          let [filteredPorducts] = featuredPosts.filter((e)=>e.id==id);
console.log(filteredPorducts);


  return (
<>
<Box>
        <img src="https://media.istockphoto.com/id/2190941673/vector/recruitment-concept-isometric-landing-page-hr-managers-review-resumes-and-select-candidates.jpg?s=612x612&w=0&k=20&c=OKdbcjzZdb92HVEMTvyUPFm7Y6xDpbzG47aj1034ouk=" alt="" height={600} width={1780}/>
    </Box>

   <Box sx={{border:"1px solid black", height:"auto", width:"auto",display:"flex",alignItems:"center",justifyContent:"center", paddingLeft:"20px"}} >
   
    <List>
  <ListItem>
    <ListItemText primary="Job Title" secondary={filteredPorducts.title} sx={{ '& .MuiListItemText-primary': { fontSize: '25px',fontWeight:600 } ,'& .MuiListItemText-secondary': { fontSize: '1.5rem' } }} />
  </ListItem>
  <ListItem>
    <ListItemText primary="Start date" secondary={filteredPorducts.date} sx={{ '& .MuiListItemText-primary': { fontSize: '25px',fontWeight:600  } ,'& .MuiListItemText-secondary': { fontSize: '1.5rem' } }} />
  </ListItem>
  <ListItem sx={{display:"flex",flexDirection:"column", alignItems:"start"}} >
  <ListItemText primary="Required Skills" sx={{ '& .MuiListItemText-primary': { fontSize: '25px',fontWeight:600  } ,'& .MuiListItemText-secondary': { fontSize: '1.5rem' } }} />
    {filteredPorducts.skills.map((e)=>{
        return(
            <ListItemText primary="" secondary={e} sx={{ '& .MuiListItemText-primary': { fontSize: '25px',fontWeight:600  } ,'& .MuiListItemText-secondary': { fontSize: '1.5rem' } }}/>
        )
    })}
  </ListItem>
  <ListItem>
    <ListItemText primary="Description about the job" secondary={filteredPorducts.description} sx={{ '& .MuiListItemText-primary': { fontSize: '25px',fontWeight:600  } ,'& .MuiListItemText-secondary': { fontSize: '1.5rem' } }} />
  </ListItem>
  <ListItem sx={{display:"flex",flexDirection:"column", alignItems:"start"}} >
    <ListItemText primary="Interview Rounds"  sx={{ '& .MuiListItemText-primary': { fontSize: '25px',fontWeight:600  } ,'& .MuiListItemText-secondary': { fontSize: '1.5rem' } }} />
    {filteredPorducts.rounds.map((e,i)=>{
        return(
    <Typography >{i+1}<ListItemText  secondary={e} sx={{ '& .MuiListItemText-primary': { fontSize: '25px',fontWeight:600  } ,'& .MuiListItemText-secondary': { fontSize: '1.5rem' } }} /></Typography>
        )
    })}
  </ListItem>

  <ListItem>
    <ListItemText primary="JOb Location" secondary={filteredPorducts.location} sx={{ '& .MuiListItemText-primary': { fontSize: '25px',fontWeight:600  } ,'& .MuiListItemText-secondary': { fontSize: '1.5rem' } }} />
  </ListItem>

  <ListItem>
    <ListItemText primary="Visit The Website" sx={{ '& .MuiListItemText-primary': { fontSize: '25px',fontWeight:600  } ,'& .MuiListItemText-secondary': { fontSize: '1.5rem' } }} />
    <Link href={filteredPorducts.link} target="_blank" >{filteredPorducts.link}</Link>
  </ListItem>


</List>
   </Box>
<Box sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'20px'}}>
    <Button variant="contained" sx={{ width:"300px" ,height:"90px",fontSize:28}} onClick={applying} >Apply Now</Button>
</Box> 


{state1 && 
<Box position="fixed" top="5px" left="1200px" sx={{border:'2px solid black' , backgroundColor:'white',height:'650px',width:'500px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'15px'}} >
 <Box position="relative" top='-270px' left='330px' onClick={()=>setState1(!state1)} >
 <ClearIcon />
  </Box>
<form onSubmit={handleSubmit} >
<TextField id="standard-basic" label="Name" variant="standard" sx={{marginTop:'20px',width:'300px'}} onChange={handleChange} onBlur={handleBlur} name="name" value={values.name}/> <br />

<TextField id="standard-basic" label="Email" variant="standard" sx={{ marginTop:'20px',width:'300px'}}  onChange={handleChange} onBlur={handleBlur} name="email" value={values.email}/> <br />

<TextField id="standard-basic" label="Phone" variant="standard" sx={{ marginTop:'20px',width:'300px'}}  onChange={handleChange} onBlur={handleBlur} name="phone" value={values.phone}/> <br />

<TextField id="standard-basic" label="Highest Education" variant="standard" sx={{ marginTop:'20px',width:'300px',textAlign:'center'}} onChange={handleChange} onBlur={handleBlur} name="education" value={values.education}/> <br />

<TextField id="standard-basic" label="Collage Name" variant="standard" sx={{ marginTop:'20px',width:'300px'}} onChange={handleChange} onBlur={handleBlur} name="collage" value={values.collage}/> <br />

  <Button type="submit" variant="contained" sx={{ marginTop:'40px',width:'300px',height:'60px',fontSize:'20px'}} onClick={()=>{
    dispatch(addCart(filteredPorducts))
    dispatch(addNotify({message:"You have successfully applied to Job"}))
  }}>Submit</Button>
</form>
</Box>
}
   <Footer/>

</> 
  )
}

export default Jobdetail