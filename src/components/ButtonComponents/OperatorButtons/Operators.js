import React, {useState} from "react";
import {operators} from "../../../data"
import OperatorButton  from "./OperatorButton";


export default function Operators() {
  const [operator, setOperater] = useState(operators);
  return (
    <div className = "operators">
      {operator.map( (button, index) => (
        <OperatorButton key = {index} button = {button.char}/>
      ))
      }
      </div>
  );
}
