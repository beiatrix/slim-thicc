import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <StyledDaily>
      <h1>'hi'</h1>
      <code>some words</code>
    </StyledDaily>
  )
}

const StyledDaily = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  h1 {
    margin: 0;
    font-size: 20vw;
    color: #09d3ac;
  }
`
