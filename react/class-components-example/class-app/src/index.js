import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

class App extends React.Component {
  state = {
    goOut: "Yes"
  }

  toggleGoOut = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        goOut: prevState.goOut === "Yes" ? "No" : "Yes"
      }
    })
  }

  render() {
    return (
      <div className="state">
        <h1 className="state--title">Should I go out tonight?</h1>
        <div className="state--value" onClick={this.toggleGoOut}>
          <h1>{this.state.goOut}</h1>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
