import { useEffect, useRef, useState } from "react";

function RenderTimes() {
  const [name, setName] = useState();
  const renderTimes = useRef(1);

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <div>
      <input
        type="text"
        //
        onChange={(e) => {
          setName(e.target.value);
        }}
        //
      />
      <h3>Your name is {name}</h3>
      <h4>I Rendered {renderTimes.current} rendered.</h4>
    </div>
  );
}

export default RenderTimes;
