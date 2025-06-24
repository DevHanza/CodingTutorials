import { useActionState } from "react";

async function increment(prevData, formData) {
  console.log(formData.get("name"));

  return prevData + 1;
  
}

function Count() {
  const [state, formAction] = useActionState(increment, 0);
  return <form>
    <h1>{state}</h1>

    <button formAction={formAction}>Increment</button>

    <input type="text" name="name" />
  </form>;
}

export default Count;
