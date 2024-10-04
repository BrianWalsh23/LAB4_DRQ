import logo from './logo.svg';
import './App.css';

function App() {

  // Exercise 2 Display hello world on webpage
  return (
    <div>
    <h1>Hello World!</h1>
    {/* Exercise to Add time */}
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
  );
}

export default App;
