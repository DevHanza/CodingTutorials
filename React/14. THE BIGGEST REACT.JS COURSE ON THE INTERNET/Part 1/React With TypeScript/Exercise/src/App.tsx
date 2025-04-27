import Button from "./Button";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";

function App() {
  function handleClick() {
    console.log("Handle is Clicked");
  }

  const user = {
    id: 1,
    name: "Jhon Doe",
    email: "jhon@gmail.com",
  };

  const admin = {
    id: 2,
    name: "Jane Smith",
    email: "jane@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />

      <Button label="Click Me" onClick={() => handleClick} disabled={false} />
      <Button label="Click Me" onClick={() => handleClick} disabled={true} />
    </div>
  );
}

export default App;
