import React, {useState} from 'react'
import styled from 'styled-components'

export default () => {
  const [habit, setHabit] = useState({
    'protein-shake': false,
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

  const handleSubmit = e => {
    e.preventDefault()
    alert('submit', habit)
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledForm>
        <label>
          <input
            type="checkbox"
            name="protein-shake"
            checked={habit['protein-shake']}
            onChange={handleChange}
          />
          <code>protein shake</code>
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
            name="rub"
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
`
