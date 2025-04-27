import { FC, ReactNode } from "react";

function User(props: { name: string; age: number; isStudent: boolean }) {
  return (
    <div>
      <h4>{props.name}</h4>
      <h4>{props.age}</h4>
      <h4>{props.isStudent}</h4>
    </div>
  );
}

export default User;

type UserShape = {
  name: string;
  age: number;
  isStudent: boolean;
};

interface UserShape2 {
  age: Number;
  isStudent: boolean;
}

// Typescript for Props with Destructuring
// const User = ({ name, age, isStudent}: { name: string; age: number; isStudent: boolean; }) => {};

// Props with Type
// const User = ({ name, age, isStudent }: UserShape) => {};

// Props with Interface
// const User = ({ name, age, isStudent }: UserShape2) => {};

// Type for childrens
// export const User2 = ({ children }: { children: ReactNode }) => {};

// Typescript for Props : Another way
// const User3: FC<UserShape> = ({ name, age, isStudent }) => {};
