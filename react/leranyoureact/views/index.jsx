import React, { Component } from 'react'

class TodoBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data={ this.props.data }/>
        <TodoForm />
      </div>
    )
  }
}


class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const todos = this.props.data.map(todo => <Todo title={todo.title} key={todo.title}>{todo.detail}</Todo>)

    return (
      <div className='todoList'>
        <table style={{ border: '2px solid black' }}>
          <tbody>
            { todos }
          </tbody>
        </table>
      </div>
    )
  }
}


class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }
  }

  handleChange(e) {
    console.log(this.props.title + ': ' + this.state.checked)
    this.setState({ checked: e.target.checked })
  }

  render() {
    return (
      <tr>
        <td style={ style.tableContent }>
          <input type='checkbox'
                 checked={ this.state.checked }
                 onChange={ this.handleChange } />
        </td>
        <td style={ style.tableContent }>{ this.props.title }</td>
        <td style={ style.tableContent }>{ this.props.children }</td>
      </tr>
    )
  }
}
Todo.propTypes = {
  title: React.PropTypes.string.isRequired
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

let style = {
  tableContent: {
    border: '1px solid black'
  }
}
