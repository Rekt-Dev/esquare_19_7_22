import { useState } from "react";
export function Header() {
  const [usersSearch, setUsersSearch] = useState("");

  return (
    <div>
      <input placeholder="Enter Your Search Here..."></input>

      <button>Search</button>
    </div>
  );
}
