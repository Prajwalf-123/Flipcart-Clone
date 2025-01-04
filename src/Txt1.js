import { useState } from "react"

export default function Txt1(){
const[Count,SetCount]=useState(0)


function New(){
     SetCount(Count+1)
}


     return<>
     
     Counting:-{Count}<br></br>
     <button onClick={New}>click!</button>
     </>

}