// import React, { useState } from 'react';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addTodo = () => {
//     if (inputValue.trim()) {
//       setTodos(prevTodos => [
//         ...prevTodos,
//         { id: Date.now(), text: inputValue, completed: false }
//       ]);
//       setInputValue('');
//     }
//   };

//   const toggleTodo = (id) => {
//     setTodos(prevTodos =>
//       prevTodos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div>
//       <input
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Add a todo"
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>
//             <span
//               style={{
//                 textDecoration: todo.completed ? 'line-through' : 'none'
//               }}
//               onClick={() => toggleTodo(todo.id)}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

//------------

// import { useState } from "react";

// function TemperatureConverter() {
//   const [celcius, setCelcius] = useState('');
//   const [fahrenheit, setFahrenheit] = useState('')

//   const handCelciusChange = (e) => {
//     const value = e.target.value;
//     setCelcius(value);
//     setFahrenheit(value === '' ? '' : ((value * 9) / 5 + 32).toFixed(2));
//   };

//   const handleFahrenheitChange = (e) => {
//     const value = e.target.value;
//     setFahrenheit(value);
//     setCelcius(value === '' ? '' : (((value - 32) * 5) / 9).toFixed(2));
//   };
//   return (
//     <div>
//       <h2> Temperature Converter</h2>
//       <label>
//         Celcius:
//         <input type="number" value={celcius} onChange={handCelciusChange} />
//       </label>
//       <br />
//       <label>
//         Fahrenheit:
//         <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
//       </label>
//     </div>
//   )
// }

// export default TemperatureConverter;

// ------

import { useState } from "react";

function ShoppingCart() {
  const product = [
    {
      id: 1,
      name: "Apple",
      price: 2,
    },
    {
      id: 2,
      name: "Orange",
      price: 3,
    },
    {
      id: 3,
      name: "Banana",
      price: 1.5,
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Products</h3>
      {product.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => addToCart(product)}>Add</button>
        </div>
      ))}

      <h3>Cart</h3>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default ShoppingCart;