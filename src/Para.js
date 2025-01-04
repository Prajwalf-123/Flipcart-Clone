import { useParams } from "react-router-dom";

export default function Para(){
     let{id}=useParams();
     return<>
     
     product page{id}
     </>
}