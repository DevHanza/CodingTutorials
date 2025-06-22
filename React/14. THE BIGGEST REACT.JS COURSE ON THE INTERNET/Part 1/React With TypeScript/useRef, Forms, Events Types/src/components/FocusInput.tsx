import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);


  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />

      <button onClick={focusInput}>Focus the Input</button>
    </div>
  );
}

export default FocusInput;
