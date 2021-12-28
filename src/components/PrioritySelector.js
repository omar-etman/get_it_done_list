import React, { useState } from "react";
import './Selector.css'
const PrioritySelector = (props) => {
  
  const {prioritySelector, priority} = props
  const handleChange = (event) => {
    prioritySelector(event.target.value)
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