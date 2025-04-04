import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useDispatch } from 'react-redux';
import { removeNotify } from './redux/slices/notifySlice';
import FeedbackIcon from '@mui/icons-material/Feedback';

const Notification = () => {
   
const {notifyreduxArray} = useSelector(item=>item.cart2);
console.log("notifyArray",notifyreduxArray);

let dispatch = useDispatch();

  return (
    <>
    <Container>
        <Box  sx={{display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"white",marginBottom:"30px",marginTop:"15px"}}>
            <FeedbackIcon/>
            <Typography variant='h3'>Notifications</Typography>
        </Box>
    {
        notifyreduxArray.map((e)=>{
            return(
               
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"white",fontSize:"20px"}}>
                    <NotificationsActiveIcon/>
                    <p>{e.message}</p>
                    <Button variant='contained' onClick={()=>dispatch(removeNotify(10))}>Delete</Button>
                </Box>
            )
        })
    }
    </Container>
    </>
  )
}

export default Notification








