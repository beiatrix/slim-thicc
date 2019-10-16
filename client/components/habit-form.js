import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default () => {
  const [habit, setHabit] = useState({
    protein: false,
    oats: false,
    kale: false,
    run: false,
    yoga: false,
    meditate: false
  })

  const handleChange = e => {
    const habitCopy = {...habit}
    habitCopy[e.target.name] = e.target.checked
    setHabit(habitCopy)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post('/api/habits', {
      habit
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledForm>
        <label>
          <input
            type="checkbox"
            name="protein"
            checked={habit.protein}
            onChange={handleChange}
          />
          <code>protein</code>
        </label>

        <label>
          <input
            type="checkbox"
            name="oats"
            checked={habit.oats}
            onChange={handleChange}
          />
          <code>oats</code>
        </label>

        <label>
          <input
            type="checkbox"
            name="kale"
            checked={habit.kale}
            onChange={handleChange}
          />
          <code>kale</code>
        </label>

        <label>
          <input
            type="checkbox"
            name="run"
            checked={habit.run}
            onChange={handleChange}
          />
          <code>run</code>
        </label>

        <label>
          <input
            type="checkbox"
            name="yoga"
            checked={habit.yoga}
            onChange={handleChange}
          />
          <code>yoga</code>
        </label>

        <label>
          <input
            type="checkbox"
            name="meditate"
            checked={habit.meditate}
            onChange={handleChange}
          />
          <code>meditate</code>
        </label>

        <br />

        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </StyledForm>
    </form>
  )
}

const StyledForm = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.25rem;
  }

  code {
    margin-left: 0.5rem;
  }

  // input[type='checkbox'] {
  //   width: 20px;
  //   height: 20px;
  //   margin-bottom: 4px;
  // }

  input[type='checkbox']:checked + code {
    color: #09d3ac;
  }
`
