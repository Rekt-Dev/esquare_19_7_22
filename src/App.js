import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [data, setData] = useState();
  async function getData(str) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${str}`

      );
      setData(await response.json());
    } catch (e) {
      console.log(e);
    } finally {
console.log(`this is data from state : ${data}`)    }
  }


  return (
    <div className="App">
      <header className="App-header">
        { <img src={logo} className="App-logo" alt="logo" />}
      </header>
    </div>
  );
};

export default App;
