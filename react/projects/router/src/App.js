import './App.css';
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      App page
      <div>
        <Link to="/about">about</Link>
        <br/>
        <Link to="/aboutt">aboutt</Link>
      </div>
    </div>
  );
}

export default App;
