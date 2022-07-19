import { useState } from "react";
export function Header() {
  const [usersSearch, setUsersSearch] = useState("");

  return (
    <>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter Your Search Here..."
      ></input>

      <button>Search</button>
    </>
  );
}
