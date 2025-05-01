import useFetch from "./Hooks/useFetch";

function CustomHookApp() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return <div>{data && data.map((item) => <p>{item.title}</p>)}</div>;
}

export default CustomHookApp;
