import { useState } from 'react'

export function useFormChange(initialState, callback) {
  const [state, setState] = useState(initialState)

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    callback(state)
    setState(initialState)
  }

  return [state, handleChange, handleSubmit]
}