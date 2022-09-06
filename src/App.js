import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA"; //default import
import { ComponentB } from "./components/ComponentB"; // named import
import DataFromFile from "./components/Data";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>hello React App</h1>
      <ComponentA />
      <ComponentB />
      <DataFromFile />
      <ComponentC />
    </div>
  );
}

export default App;
