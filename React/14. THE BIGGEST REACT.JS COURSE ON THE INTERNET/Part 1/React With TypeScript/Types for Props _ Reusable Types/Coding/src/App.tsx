import User from "./User";
import { User2 } from "./User";

function App() {
  return (
    <div>
      <User name="alex" age={20} isStudent={true} />
      <User2>Children Content</User2>
    </div>
  );
}

export default App;
