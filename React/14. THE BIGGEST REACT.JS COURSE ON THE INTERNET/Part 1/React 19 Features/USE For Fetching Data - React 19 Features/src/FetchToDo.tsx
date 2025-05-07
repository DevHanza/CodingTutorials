import { use } from "react";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

function FetchToDo() {
  const data = use(fetchData());
  return <div>{data.title}</div>;
}

export default FetchToDo;
