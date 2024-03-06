"use client";
// // // import { cookies } from "next/headers";
// // import React, { useEffect ,useState} from "react";
// // // import { Button } from "@/components/ui/button";

// // const page = ({dd}) => {


// //   const [todos, setTodos] = useState([]);

// //   useEffect(() => {
// //     const storedTodos = JSON.parse(localStorage.getItem("items"));
// //     if (storedTodos) {
// //       setTodos(storedTodos);
// //     }
// //   }, []);

// //   const addTodo = () => {
// //       const updatedTodos = [...todos,  dd ];
// //       setTodos(updatedTodos);
// //       localStorage.setItem("items", JSON.stringify(updatedTodos));
// //   };


// //   return (
// //     <div>
// //       <button
// //         onClick={addTodo}
// //         variant="outline"
// //         className=" hover:bg-red-500 font-extrabold w-screen border-y-2 border-black"
// //       >
// //         ADD TO CART
// //       </button>
// //     </div>
// //   );
// // };

// // export default page;




// import React, { useEffect ,useState} from "react";

// const Page = ({ dd }) => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     // Load todos from localStorage when component mounts
//     const storedTodos = JSON.parse(localStorage.getItem("items"));
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);
//   let ddd=dd;
//   const addTodo = () => {
//     // Validate the todo item before adding
//     // if (ddd.trim() === "") {
//     //   return; // Do not add empty todo items
//     // }
//     // Update todos state and localStorage with the new todo item
//     const updatedTodos = [...todos, dd];
//     setTodos(updatedTodos);
//     localStorage.setItem("items", JSON.stringify(updatedTodos));
//   };

//   return (
//     <div>
//       <button
//         onClick={addTodo}
//         className="hover:bg-red-500 font-extrabold w-screen border-y-2 border-black"
//       >
//         ADD TODO
//       </button>
//     </div>
//   );
// };

// export default Page;



import React, { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import AddC from "../../AddCart/page";
const Page = ({ dd }) => {
  // const [todos, setTodos] = useState([]);
  // const [cart, setCart] = useState(true);

  // useEffect(() => {
  //   // Load todos from localStorage when component mounts
  //   const storedTodos = JSON.parse(localStorage.getItem("items"));
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // }, []);

  // const addTodo = () => {
  //   // const cookieStore = cookies();
  //   console.log("working");
  //   const cart = localStorage.getItem("cart");
    
  //   if (!cart) localStorage.setItem("cart", JSON.stringify([dd]));
  //   else {
  //     // const cartArr = JSON.parse(cart.value);
  //     const cartArr = JSON.parse(cart);
  //     localStorage.setItem("cart", JSON.stringify([...cartArr, dd]));
  //   }
  //   // // Validate the todo item before adding
  //   // const trimmedValue = String(dd).trim();

  //   // // Validate the todo item before adding
  //   // if (trimmedValue === "") {
  //   //   return; // Do not add empty todo items
  //   // }
  //   // // Update todos state and localStorage with the new todo item
  //   // const updatedTodos = [...todos, trimmedValue];
  //   // setTodos(updatedTodos);
  //   // localStorage.setItem("items", JSON.stringify(updatedTodos));
  // };
  // console.log(todos);
  let [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState(true);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);
  const addToCart = () => {
    // if (dd.trim() !== "") {
      const updatedCartItems = [...cartItems, dd];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    // }
  };
  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
  return (
    <div>
      <button
        onClick={addToCart}
        className="hover:text-red-500 font-extrabold  border-black"
      >
<SlBasket />
      </button>
      {!cart&&(<AddC addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems}/>)}
    </div>
  );
};

export default Page;
