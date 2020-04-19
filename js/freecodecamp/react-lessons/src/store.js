import { createStore } from 'redux'

const initialState = []

function messageReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      state = state.concat(action.message)
      break
    default:
      return state
  }
}

export function addMessage(message) {
  return {
    type: 'ADD',
    message
  }
}

const store = createStore(messageReducer)

export default store
