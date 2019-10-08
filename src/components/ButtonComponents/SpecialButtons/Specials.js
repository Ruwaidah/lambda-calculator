import React, { useState } from "react";
import {specials} from "../../../data"
import SpecialButton from "./SpecialButton";



export default  function Specials() {
  const [special, setSpecial] = useState(specials)
  return (
    <div className = "specials"> 
      {
        specials.map( (button, index) => (
          <SpecialButton key = {index} button = {button}/>
        )
        )}
    </div>
  );
};
