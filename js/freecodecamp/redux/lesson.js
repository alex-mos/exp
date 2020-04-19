import { createStore, combineReducers, applyMiddleware } from 'redux'

const ADD = 'ADD'

const initialState = []

function messageReducer(state = initialState, action) {
    switch(action.type) {
        case ADD:
            return state.concat(action.message)
        default:
            return state
    }
}

function addMessage(message) {
  return {
      type: ADD,
      message
  }
}

const store = createStore(messageReducer)

console.log(store.getState())
store.dispatch(addMessage('asdf'))
console.log(store.getState())
