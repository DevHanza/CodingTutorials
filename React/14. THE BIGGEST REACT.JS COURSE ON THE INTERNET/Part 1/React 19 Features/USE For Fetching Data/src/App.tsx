import { Suspense } from "react";
import FetchTodo from "./components/FetchToDo";

const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <FetchTodo />
    </Suspense>
  );
};

export default App;