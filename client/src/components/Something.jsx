import { Box, Button, Container, FormControl, FormLabel, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Something = () => {

    let someapi = {
        id:"2",
        title: "Web developer",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://images.unsplash.com/photo-1562783912-21ad31ee2a83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHww",
        imageText: "Image Text",
        skills : ['Html','css','JavaScript','Node.js',"Express.Js",'MongoDB','React.Js'],
        rounds: ["Aptitude Round","Coding Round","Project Explanation","Technical Round" , "Hr Round"],
        location:"Hyderabad",
        link:"https://www.tcs.com/"
      }

let [state1,setState1] = useState(false);

      let applying =()=>{
         setState1(!state1);
      }

  return (
    // <Container sx={{display:'flex', justifyContent:"space-evenly"}} >
    <>
    <Box>
            <img src="https://media.istockphoto.com/id/2190941673/vector/recruitment-concept-isometric-landing-page-hr-managers-review-resumes-and-select-candidates.jpg?s=612x612&w=0&k=20&c=OKdbcjzZdb92HVEMTvyUPFm7Y6xDpbzG47aj1034ouk=" alt="" height={600} width={2000}/>
        </Box>
   
    {/* <Container > */}
        
       {/* <Box sx={{border:"1px solid black", height:"auto", width:"auto"}} >
          <img src={someapi.image} alt="" height={400} width={1000}/>
       </Box> */}
       <Box sx={{border:"1px solid black", height:"auto", width:"auto", fontSize:28}} >
       
        <List>
      <ListItem>
        <ListItemText primary="Job Title" secondary={someapi.title} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Start date" secondary={someapi.date} />
      </ListItem>
      <ListItem sx={{display:"flex",flexDirection:"column", alignItems:"start"}} >
      <ListItemText primary="Required Skills" />
        {someapi.skills.map((e)=>{
            return(
                <ListItemText primary="" secondary={e} />
            )
        })}
      </ListItem>
      <ListItem>
        <ListItemText primary="Description about the job" secondary={someapi.description} />
      </ListItem>
      <ListItem sx={{display:"flex",flexDirection:"column", alignItems:"start"}} >
        <ListItemText primary="Interview Rounds"  />
        {someapi.rounds.map((e,i)=>{
            return(
        <Typography>{i+1}<ListItemText  secondary={e} /></Typography>
            )
        })}
      </ListItem>

      <ListItem>
        <ListItemText primary="JOb Location" secondary={someapi.location} />
      </ListItem>

      <ListItem>
        <ListItemText primary="Wisit Website" />
        <Link href={someapi.link} target="_blank" >{someapi.link}</Link>
      </ListItem>
 

    </List>
       </Box>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button variant="contained" sx={{ width:"300px" ,height:"90px",fontSize:28}} onClick={applying} >Apply Now</Button>
    </Box> 


{state1 && 
    <Box position="absolute" top="1200px" left="400px" sx={{border:'2px solid black' , backgroundColor:'white',height:'500px',width:'300px',display:'flex', alignItems:'center',flexDirection:'column',justifyContent:'center'}} >
    <form onSubmit="" sx={{display:'flex', alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
      <FormControl sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
        <FormLabel>Name</FormLabel>
        <TextField type="string" />
      </FormControl>
      <FormControl sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
        <FormLabel>Email</FormLabel>
        <TextField type="email"  />
      </FormControl>
      <Button type="submit" variant="contained">Submit</Button>
    </form>
    </Box>
}
       <Footer/>
    {/* </Container> */}

    </>
  )
}

export default Something