import React from "react";
import JSXExamples from "./components/JSXExamples";
import UserCard from "./components/UserCard";
import ProductCard from "./components/ProductCard";

const users = [
  {
    id: 1,
    name: "Alice Smith",
    age: 25,
    role: "Frontend Developer",
    isActive: true, // added to utilize your UserCard's isActive prop
  },
];

function App() {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          isActive={user.isActive}
        />
      ))}
    </div>
  );
}

export default App;