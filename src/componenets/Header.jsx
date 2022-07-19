import { useState } from "react";
import {getData} from "../App"

export function Header() {
  const [usersSearch, setUsersSearch] = useState("");

  let baseLink = `https://www.googleapis.com/books/v1/volumes?q=`;
  let constructedLink = baseLink + usersSearch;

  function sendSearchToServer(e) {
    console.log(`this is sendSearchToServer running with : ${usersSearch}`);
    console.log(`this is constructedLink : ${constructedLink}`);
  }
  return (
    <>
      <input
        onChange={(e) => setUsersSearch(e.target.value)}
        type={"text"}
        placeHolder={"Enter Your Search Here..."}>
      

      </input>
<br />
      <button onClick={getData}>Search</button>
    </>
  );
}
