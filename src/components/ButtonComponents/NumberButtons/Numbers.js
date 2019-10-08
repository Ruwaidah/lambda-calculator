import React, {useState} from "react";
import { numbers } from "../../../data";
import { gunzipSync } from "zlib";
import NumberButton  from "./NumberButton";



  export default function Numbers() {
   const [number, setNumber] = useState(numbers);
  return (
  <div className = "numbers"> 
    {number.map((button, index) =>(
       <NumberButton key={index} button={button}/>
    ))
    }
      </div>  
  );
}




