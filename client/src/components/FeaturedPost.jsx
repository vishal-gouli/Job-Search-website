import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    title:{
        fontSize:40,
    fontFamily:"monserrat"
    },
    cover:{
    //   backgroundImage:'url("https://pixabay.com/photos/mountain-field-fog-haze-landscape-9423779/")',
    //     backgroundPosition:"center",
    //     backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat', 
    // backgroundPosition: 'center',
        padding:"35px 25px",
        height:"250px",
    }
})

const FeaturedPost = () => {
    let classes = useStyles();
  return (
    <Card className={classes.cover}  sx={{backgroundImage:'url("https://media.istockphoto.com/id/2196726915/vector/blue-abstract-background-with-curves-trendy-geometric-design.jpg?s=612x612&w=0&k=20&c=aVyHD6REtDgZnEAVTzq2TVSV0bE8wNCjrLzjmcLBv5o=")',
      backgroundPosition:"center",
      backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: 'center',
  marginTop:"10px",
  height:"400px",
}}>
          <CardContent className={classes.textContainer}>
            <Typography className={classes.title} variant='h4' sx={{backgroundColor:"purple",color:"white", padding:"5px 20px" , borderRadius:"16px" ,display:"inline-block",fontSize:"27px"}} gutterBottom>Searching JOb Made Easy Searching JOb Made Easy Searching JOb Made  Searching Made Easy</Typography><br/>
            <Typography inherit='5' sx={{backgroundColor:"purple", padding:"10px" , borderRadius:"18px" ,fontSize:"20px",fontWeight:"300",color:"white",display:"inline-block"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam voluptatum ab! Non velit temporibus vero nisi ad  </Typography>
            <Typography inherit='5' sx={{backgroundColor:"purple", padding:"10px" , borderRadius:"18px" ,fontSize:"20px",fontWeight:"300",color:"white",display:"inline-block",marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam voluptatum ab! Non velit ab! Non.</Typography><br/>
            <Typography inherit='5' sx={{backgroundColor:"purple", padding:"10px" , borderRadius:"18px" ,fontSize:"20px",fontWeight:"300",color:"white",display:"inline-block",marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing </Typography><br/>
            <Typography inherit='5' sx={{backgroundColor:"purple", padding:"10px" , borderRadius:"18px" ,fontSize:"20px",fontWeight:"300",color:"white",display:"inline-block",marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet sit done  </Typography>
          </CardContent>

          
          <CardActions>
               <Button variant='text' className={classes.btn} sx={{backgroundColor:"black",color:"white" ,height:"50px",width:"500px",fontSize:"20px",fontWeight:"500",borderRadius:"15px",marginLeft:"10px"}} >
                Read More...
               </Button>  
          </CardActions> 
           
               </Card>
  )
}

export default FeaturedPost