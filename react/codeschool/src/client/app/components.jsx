var React = require('react');
var ReactDOM = require('react-dom');

class StoryBox extends React.Component {
  render() {
    var now = new Date();
    var topicsList = ['HTML', 'JavaScript', 'React'];

    return(
      <div>
        <h3>Stories</h3>
        <p className='lead'>
          Current time: {now.getHours()}:{now.getMinutes()}
        </p>
        <ul>
          {topicsList.map(topic => <li>{topic}</li>)}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <StoryBox />, document.getElementById('story-app')
)
