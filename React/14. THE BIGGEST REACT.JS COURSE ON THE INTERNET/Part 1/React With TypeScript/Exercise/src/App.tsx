import Button from "./components/Button";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";
import { Info, AdminInfoList } from "./types";

function App() {
  function handleClick() {
    console.log("Handle is Clicked");
  }

  const user: Info = {
    id: 1,
    name: "Jhon Doe",
    email: "jhon@gmail.com",
  };

  const admin: AdminInfoList = {
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

      <Button label="Click Me" onClick={() => handleClick()} disabled={false} />
      <Button label="Click Me" onClick={() => handleClick()} disabled={true} />
    </div>
  );
}

export default App;
