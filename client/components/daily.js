import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

export default () => {
  return (
    <StyledDaily>
      <h1>today is {moment().format('LL')}</h1>
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
    font-size: 2rem;
    color: #09d3ac;
  }
`
