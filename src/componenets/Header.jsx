import { useState } from "react";
export function Header() {
  const [usersSearch, setUsersSearch] = useState("");

  function handleChange(event) {}

  return (
    <div>
      <input placeholder="Enter Your Search Here..."></input>

      <button>Search</button>
    </div>
  );
}
