import useFetch from "./useFetch";

function App() {
  const [data] = useFetch("https://dummyjson.com/todos");

  return (
    <div>
      {data && data.todos.map((item) => <p key={item.id}>{item.todo}</p>)}
    </div>
  );
}

export default App;
