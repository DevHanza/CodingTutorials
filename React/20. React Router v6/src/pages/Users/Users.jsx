import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router";

export default function Users() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=5")
      .then((r) => r.json())
      .then((data) => setList(data.users));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <Outlet />
      <ul>
        {list.map((u) => (
          <li key={u.id}>
            <Link to={String(u.id)}>
              {u.firstName} {u.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
