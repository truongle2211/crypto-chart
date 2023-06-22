import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/coin_market_cap";

const App = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      setCrypto(response);
      console.log(response);
      console.log(crypto);
    });
  });

  useEffect(() => {}, []);
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
};

export default App;
