import { Box, Button, Card, CardActionArea, CardContent, Container, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { notification } from './customhooks/NotificationCustom';
import { useDispatch } from 'react-redux';
import { addNotify } from './redux/slices/notifySlice';

const SearcherDetails = () => {

  let dispatch = useDispatch();

let [state1,setState1] = useState([{name:"",email:"",phone:"",education:"",collage:""}]);

let backendData = useEffect(async()=>{
    let data = await axios.get("http://localhost:7000/api/userroute");
    setState1(data.data.data);
},[])

let deleting=(id)=>{
  console.log(id);
    axios.delete(`http://localhost:7000/api/delete/${id}`);
    notification(id);
    alert("data is been delted successfully");
}
let updating=(id)=>{
    axios.put(`http://localhost:7000/api/update/${id}`);

}

// console.log("backendData",state1);

  return (
    <>
    
    <Container sx={{display:"flex",flexDirection:"row"}}>
            <Box sx={{display:"flex"}}>
        <CardActionArea component="a" href='#' sx={{display:"flex",flexWrap:"wrap"}} >
            {state1.map(({name,email,phone,education,collage,_id})=>{
                return(
        <Card sx={{width:"300px",margin:"20px",height:"250px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
          <CardContent >
            <Box sx={{marginTop:"10px"}}>
            <Typography>name:{name}</Typography> 
            </Box>
            <Box sx={{marginTop:"10px"}}>
            <Typography>email:{email}</Typography> 
            </Box>
            <Box sx={{marginTop:"10px"}}>
            <Typography>phoen:{phone}</Typography> 
            </Box>
            <Box sx={{marginTop:"10px"}}>
            <Typography>education:{education}</Typography> 
            </Box>
            <Box sx={{marginTop:"10px"}}>
            <Typography>collage:{collage}</Typography> 
            </Box>
          </CardContent>
          <Box sx={{marginBottom:"20px" }}>
          <Button variant='contained' sx={{margin:"3px"}} onClick={()=>{
            updating(_id)
            alert("Updated Successfully")
            }}>update</Button>
          <Button variant='contained' onClick={()=>{
            deleting(_id);
            alert("Deleted Successfully");
            dispatch(addNotify({message:"User is Been Successfully Deleted"}))
            }}>delete</Button>
          </Box>
        </Card>
                )
    })}
        </CardActionArea>
        </Box>
    </Container>

    <Footer/>
    </>
  )
}

export default SearcherDetails
