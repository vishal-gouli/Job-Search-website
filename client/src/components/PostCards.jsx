import { ClassNames } from '@emotion/react'
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles'
import { Navigate, NavLink } from 'react-router-dom'
import { featuredPosts } from './Data/Data'



const useStyles = makeStyles({
   card:{
      display:"flex",
      height:"270px",
      width:"500px",
      margin:"10px"
   },
   cordDetails:{
      // flex:1,
   },
   cardMedia:{
      // width:160,
      // height:300
   }
})

const PostCards = () => {

    let classes = useStyles();
  return (
   
   <Container    sx={{display:"flex",flexWrap:"wrap"}}  >
      {
         featuredPosts.map((e)=>{
            let titlevariation = e.title.replace(/ /g, "-");
            return(
               <Card className={classes.card}  >
                  <CardActionArea component='a' href={`/jobsection/${titlevariation}`} >
                <div className={classes.cardDetails}>
                  <CardContent>
                     <Typography component='h2' variant='h5'>
                        {e.title}
                     </Typography>
                     <Typography  variant='subtitle1'color='textSecondary'>
                        {e.date}
                     </Typography>
                     <Typography  variant='subtitle1' paragraph>
                        {e.description.slice(0,300)}
                     </Typography>
                     <Typography  variant='subtitle1' style={{color:'skyblue'}}>
                        Continue reading........
                     </Typography>
                  </CardContent>
                </div>
     
     {/* <Hidden  xsDown >
        <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle}     />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolorum deserunt labore eaque unde saepe. Natus ducimus soluta voluptatibus magnam perferendis sint, recusandae quo iste reiciendis pariatur ut. Delectus corporis beatae quas doloribus ab labore ullam facere, molestiae voluptatem, quam aperiam explicabo iusto expedita aspernatur minus! Corporis, optio quae! Saepe quasi non illum suscipit repellat exercitationem, magnam deleniti a aliquid rerum necessitatibus. Maiores, tempore in? Inventore libero quae nesciunt repudiandae totam facere vel, nulla aut! Soluta sequi expedita officiis culpa, iure accusamus modi maiores earum error magnam exercitationem dolorum mollitia neque quod id quisquam reiciendis, pariatur ea recusandae sapiente illum.
     </Hidden> */}
     
         </CardActionArea>
               </Card>
            )
         })
      }
   
   </Container>

  )
}

export default PostCards





