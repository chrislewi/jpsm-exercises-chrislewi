import React from "react";
import UserCard from "./components/UserCard";

const users = [
  {
    id: 1,
    name: "Alice Smith",
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    name: "Nobita",
    age: 10,
    isActive: false,
  },
  {
    id: 3,
    name: "Don Carlo",
    age: 45,
    isActive: true,
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