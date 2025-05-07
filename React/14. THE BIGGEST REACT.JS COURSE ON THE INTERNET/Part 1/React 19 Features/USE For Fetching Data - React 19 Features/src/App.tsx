import { Suspense } from "react";
import FetchToDo from "./FetchToDo";

function App() {
  return (
    <Suspense>
      <FetchToDo />
    </Suspense>

  );
}

export default App;
