import React from 'react';
import { Provider, connect } from 'react-redux'
import PropTypes from 'prop-types'
import store from './store'
import { addMessage } from './store'
import './App.css';


class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  submitMessage() {
    this.setState({
      messages: this.state.messages.concat([this.state.input]),
      input: ''
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.submitMessage}>
          добавить сообщение
        </button>
        <ul>
          {this.state.messages.map((message, index) => <li key={index}>{message}</li>)}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};



function App() {
  return (
    <Provider store={store}>
      <DisplayMessages />
    </Provider>
  )
}

export default App;
