import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default UserDetail;
function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`) // fetch single user :contentReference[oaicite:2]{index=2}
      .then((r) => r.json())
      .then(setUser);
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h3>
        {user.firstName} {user.lastName} (#{user.id})
      </h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}
