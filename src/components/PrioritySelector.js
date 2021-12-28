import React, { useState } from "react";
import './Selector.css'
const PrioritySelector = (props) => {
  
  const { priority, editorFunction} = props
  const handleChange = (value) => {
    editorFunction('priority', value)
  }
  
  return (
    <select
    value={priority}
    onChange={e => handleChange(e.target.value)}
    >
      <option value="low">low</option>
      <option value="medium">medium</option>
      <option value="high">high</option>
    </select> 
  );   
}

export default PrioritySelector