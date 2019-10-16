import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import HabitForm from './habit-form'

export default () => {
  return (
    <StyledDaily>
      <code>
        today is <span>{moment().format('LL')}</span>
      </code>
      <HabitForm />
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

  span {
    color: #09d3ac;
  }
`
