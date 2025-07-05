import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  function focus() {
    console.log(inputRef.current);

    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default FocusInput;
