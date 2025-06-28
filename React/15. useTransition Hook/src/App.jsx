import { useState } from "react";

function App() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleInputChange(e) {
    setInput(e.target.value);

    const l = [];

    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value);
    }

    setList(l);
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
