import React, {useState} from "react";
import { Numbers } from "../ButtonComponents/NumberButtons/Numbers";
import { compileFunction } from "vm";
import {NumberButton} from "../ButtonComponents/NumberButtons/NumberButton"




export default function Display() {
  const [count, setCount] = useState(0);

  return (
    <div className="display">
      {count}
    </div>
      )
}
