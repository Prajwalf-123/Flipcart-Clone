import { useState } from "react";

export default function Hello1(){
     const[Count,SetCount]=useState(0)

     function Hello2(){
          SetCount(Count+1)
     }
     return<>
     
     Counting:-{Count}
     <button onClick={Hello2()}> Click!</button>
     
     
     
     
     </>
}