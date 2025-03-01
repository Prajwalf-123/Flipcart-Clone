import { useParams } from "react-router";
import { useState, useEffect } from "react";
import * as React from 'react';
import axios from "axios";
import { Container,Grid2 } from "@mui/material";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';




function Hello(){
    

    let { id } = useParams();
    const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res=>{setData(res.data)

      console.log(res)

    } )

  },[])

    return <>
        <>Product page {id} </>
        <Grid2 container spacing={2}>
  
          <Grid2 size={{ xs: 6, md: 4 }}>
           <img src={data.thumbnail} alt="" height={250} />
          </Grid2>
          <Grid2 size={{ xs: 6, md: 8 }}>
           <b>Title</b>={data.title}<br></br><br></br>
           <b>Description</b>={data.description}<br></br><br></br>
           <b>Brand</b>={data.brand}<br></br><br></br>
           <b>Price</b>=${data.price}<br></br><br></br>
           <b>Return Policy</b>={data.returnPolicy}<br></br><br></br>
           <Button variant="contained">Buy Now</Button>
           <Button variant="contained">Add to Cart</Button>
          </Grid2>
          <Grid2 size={{ xs: 6, large: 4 }}>
            Ratings={data.rating}
          <Stack spacing={1}>
      <Rating name="size-medium" value={parseInt(data.rating)} />
    </Stack>
    Comments:-{data.comment}

          </Grid2>

       </Grid2>
         
        </>
    
}


export default Hello;