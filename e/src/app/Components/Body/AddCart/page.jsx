'use client'
import React,{useState} from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { SlBasket } from "react-icons/sl";

const page = ({addToCart, removeFromCart, cartItems }) => {
  let [cartItemss, setCartItems] = useState([cartItems]);

  const ddd= async()=>{
    console.log("working");
          try {
        const response = await fetch("/Api/Basket", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // id:dd
            id:"hammad"
          }),
          cache: "no-cache",
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error('Error submitting data:');
      }
  }
  const checkitems=JSON.parse(localStorage.getItem('cartItems'));
  return (
    <div>
          <div className=" flex justify-end ">
      <Sheet>
        <SheetTrigger className=""><SlBasket />
          </SheetTrigger>{" "}
          <SheetContent className=" bg-black text-white">
            <SheetHeader className="gap-4  py-6">
              <div className=" flex justify-center ">
                <SheetTitle>Your Basket</SheetTitle>
              </div>
              <hr />
              <SheetDescription>
                <div className="flex min- flex-col  items-center justify-center gap-9 p-4">
                <h2>Cart Items:</h2>
        <ul>
          {checkitems.map((item, index) => (
            <li key={index} className="text-white space-x-3">
              {item}                    <button className=' bg-red-600 rounded-full text-black px-2'>-</button>

            </li>
          ))}
        </ul>              
        {/* <button onClick={() => handleRemove(index)}>Remove</button> */}

                    {/* <button className=' bg-red-400 p-2 rounded-lg'>Remove Item</button> */}
                    {/* <p>Total Amount</p> */}
                    <button className=' bg-green-400 p-2 rounded-lg' onClick={ddd}>Add To Your Cart</button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
      </Sheet>
    </div>
    </div>
  )
}

export default page
