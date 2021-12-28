import React from "react";
import './Selector.css'
const StatusSelector = (props) => {

  const {taskStatus, editorFunction} = props
  const handleChange = (value) => {
    editorFunction('taskStatus', value)
  }
  return (
    <select
      value={taskStatus}
      onChange={e => handleChange(e.target.value)}
    >
      <option value="to do">to do</option>
      <option value="in progress">in progress</option>
      <option value="done">done</option>
    </select> 
  );   
}

export default StatusSelector