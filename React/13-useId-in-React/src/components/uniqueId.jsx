import { useId } from "react";

function UniqueId() {
  const id = useId();

  return (
    <form>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="name" id={`${id}-name`} />
    </form>
  );
}

export default UniqueId;
