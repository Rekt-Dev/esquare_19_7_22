import { useState } from "react";
import { getData } from "../App";

export function Header(props) {
  const [usersSearch, setUsersSearch] = useState("");

  let baseLink = `https://www.googleapis.com/books/v1/volumes?q=`;
  let constructedLink = baseLink + usersSearch;

  return (
    <>
      <input
        onChange={(e) => setUsersSearch(e.target.value)}
        type={"text"}
        placeholder={"Enter Your Search Here..."}
      ></input>
      <br />
      <button
        onClick={() => {
          props.search(text);
        }}
      >
        Search
      </button>
    </>
  );
}
