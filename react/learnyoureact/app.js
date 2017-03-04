import React from 'react'
import ReactDOM from 'react-dom'
import TodoBox from './views/index.jsx'

// let data = JSON.parse( document.getElementById('initial-data').getAttribute('data-json') )

var data = [
  {
    title: 'Shopping',
    detail: process.argv[3]
  },
  {
    title: 'Hair cut',
    detail: process.argv[4]
  }
]

ReactDOM.render(<TodoBox data={ data } />, document.getElementById('app'))
