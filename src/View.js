import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function View(){
     let{id}=useParams();
     const[data,setdata]=useState([]);
          useEffect(()=>{
               axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
               .then((res)=>{setdata(res.data)})
          },[])
     
     return<>

     <div style={{backgroundColor:"cadetblue"}}>
       <table border={1}>
          <thead>
               <tr>
                <th>Id</th>
                <th>title</th>
                <th>body</th>
              
               </tr>
          </thead>
          <tbody>
               <tr>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>


               </tr>
          </tbody>
      </table>
     </div>
     </>
}