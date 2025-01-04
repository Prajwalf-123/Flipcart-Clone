import { useState ,react, useEffect} from "react";
import axios from "axios";

export default function New1(){
  const[data,setdata]=useState([]);

useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/posts`)
.then((response)=>{
     console.log(response)
     setdata(response.data)
     

})

},[])


return<>
<center><h1>Fake API</h1></center>
           
{data.map((data)=>{
     return(

          <div>{data.body}</div>
     )
})}

</>

}





