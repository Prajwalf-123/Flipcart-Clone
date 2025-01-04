import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function View2(){
     let{id}=useParams();
     const[data,setdata]=useState([]);
          useEffect(()=>{
               axios.get(`https://dummyjson.com/products/${id}`)
               .then((res)=>{setdata(res.data)})
          },[])
     
     return<>

     <div style={{backgroundColor:"pink"}}>
       <table border={1}>
          <thead>
               <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>

              
               </tr>
          </thead>
          <tbody>
               <tr>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td>{data.category}</td>



               </tr>
          </tbody>
      </table>
     </div>
     </>
}