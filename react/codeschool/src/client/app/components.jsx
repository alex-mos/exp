var React = require('react');
var ReactDOM = require('react-dom');

class StoryBox extends React.Component {
  render() {
    return(<div>Story Box</div>);
  }
}

ReactDOM.render(
  <StoryBox />, document.getElementById('story-app')
)
