import React, { Component } from 'react'

class TodoBox extends Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    )
  }
}


class TodoList extends Component {
  render() {
    return (
      <div className='todoList'>
        <table style={{ border: '2px solid black' }}>
          <tbody>
            <Todo title='Shopping'>Milk</Todo>
            <Todo title='Hair cut'>13:00</Todo>
          </tbody>
        </table>
      </div>
    )
  }
}


class Todo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <td style={{ border: '1px solid black'}}>{ this.props.title }</td>
        <td style={{ border: '1px solid black'}}>{ this.props.children }</td>
      </tr>
    )
  }
}


class TodoForm extends Component {
  render() {
    return (
      <div className='todoForm'>
        I am a TodoForm.
      </div>
    )
  }
}

export default TodoBox
