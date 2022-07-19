import { useState } from "react";
export function Header() {
  const [usersSearch, setUsersSearch] = useState("");

  return (
    <>
      <input
        onChange={(e) => setUsersSearch(e.target.value)}
        type="text"
        placeholder="Enter Your Search Here..."
      ></input>

      <button>Search</button>
    </>
  );
}
