import { FormEvent, useRef, useState } from "react";

type FormData = {
    name: string;
    email: string;
    password: string;
}

function Form() {
  const [submittedData, setSubmittedDate] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedDate({
        name: nameValue,
        email: emailValue,
        password: passwordValue
    })
  }

  return <form onSubmit={handleSubmit}>

    <input type="text" placeholder="Enter your name" ref={name} />
    <input type="email" placeholder="Enter your email" ref={email} />
    <input type="password" placeholder="Enter your password" ref={password} />
    <button type="submit">Submit</button>

    <section>
        <h2>Name: {submittedData.name}</h2>
        <h2>Email: {submittedData.email}</h2>
        <h2>Password: {submittedData.password}</h2>
    </section>

  </form>;
}

export default Form;
