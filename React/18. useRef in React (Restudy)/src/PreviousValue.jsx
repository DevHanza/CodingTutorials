import { useEffect, useRef, useState } from "react";

function PreviousValue() {
  const prevValue = useRef();
  const [name, setName] = useState();

  useEffect(() => {
    prevValue.current = name;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h4>New name: {name}.</h4>
      <h4>Old name: {prevValue.current}.</h4>
    </div>
  );
}

export default PreviousValue;
