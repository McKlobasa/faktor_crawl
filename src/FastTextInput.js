import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Input = styled.input`
  width: 700px;
  height: 40px;
`

function FastTextInput (props) {
  const handleChange = (event) => props.setText(event.target.value)
  return (
    <Input type="text" value={props.text} onChange={handleChange} />
  )
}

export default FastTextInput
