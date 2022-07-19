//import * as ReactDOMClient from 'react-dom/client';
import React, { useState } from "react";
import "./App.css";
import { Header } from "./componenets/Header";

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
      console.log(`this is data from state : ${data}`);
    }
  }

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
