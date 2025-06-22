import { useFormStatus } from "react-dom";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="bg-stone-900 text-white px-10 py-2 mt-2 ">
      {pending ? "Submitting.." : "Submit"}
    </button>
  );
}

export default FormButton;
