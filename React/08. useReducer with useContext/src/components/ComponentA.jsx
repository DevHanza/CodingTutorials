import { ComponentB } from "./ComponentB";

export function ComponentA() {
  return (
    <div className="box">
      <h3>Component A</h3>
      <ComponentB />
    </div>
  );
}
