import { MenuItem, Select, FormControl } from "@material-ui/core";
import React, { useState } from "react";
import styled from 'styled-components';
import './Selector.css'
const StatusSelector = (props) => {

  const {taskStatus, statusSelector} = props
  const handleChange = (event) => {
    statusSelector(event.target.value)
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