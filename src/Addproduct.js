import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  Container from '@mui/material/Typography';
import { Grid2,TextField } from '@mui/material';
function Addproduct(){
return<>  
        

       <Container>
        <Grid2 xs={{border:1}}>
          <center>
        <Typography >
        <h2><b>Add Product</b></h2> 
        </Typography>
        <a href="Login">click! for Login</a><br></br>

        </center>
        <center>
                <form>
                        <TextField  label="Title" placeholder="Title" varient="outlined" fullwidth required/><br/><br/>
                        <TextField  label="Description" placeholder="Description" varient="outlined" fullwidth required/><br/><br/>
                        <TextField  label="Quantity" placeholder="Select Quantity" varient="outlined" fullwidth required/><br/><br/>
                        <TextField  label="Amount" placeholder="Amount" varient="outlined" fullwidth required/><br/><br/>
                        <Button type="submit" varient="contained" style={{Color:"blue"}}>Submit</Button><br/><br/>
                        
                </form>
                </center>
                </Grid2> 
                </Container>
        
        
                </>

}
export default Addproduct;