import { createStore, combineReducers, applyMiddleware } from 'redux'

const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign(state, { status: 'online'})
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};



const store = createStore(immutableReducer)

console.log(store.getState())
store.dispatch(wakeUp())
console.log(store.getState())