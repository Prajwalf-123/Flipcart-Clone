import * as React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container,Grid2 } from '@mui/material';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
 marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
       transform: 'rotate(180deg)',
     },
  },
  ],
}));





export default function Apii() {
    const [expanded, setExpanded] = React.useState(false);
  
       const handleExpandClick = () => {
         setExpanded(!expanded);
       };
     
  const[records,setrecords]=useState([]);

  useEffect(()=>{
axios.get(`https://dummyjson.com/products`)
.then((res)=>{
console.log(res)
setrecords(res.data.products)
})

  },[])

  return <>
   
    <Container sx={{margin:5}} >
  <Grid2 spacing={5} container >
    {records && records.map((val)=>{
        return<> 
              <Grid2 item size={{xs:6,md:4}}>
            <Card sx={{ maxWidth: 345,backgroundColor:"pink" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {val.id}
          </Avatar>
        }
        
       
        title= {val.title} 
        
      />
      <CardMedia
        component="img"
        height="194"
        image={val.images[0]}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <b style={{color:"red"}}>Body:-</b><u style={{color:"black"}}><i>{val.description}</i></u>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
      <a href={`/Store-view/${val.id}`}>View</a>
      
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> 
      </CardActions>
     
    </Card>
    </Grid2>
    
          
          </>
          })}

    
    </Grid2>
 </Container>

    </>
  
}
