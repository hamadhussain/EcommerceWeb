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
import Link from 'next/link';

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
  const mobileNumber = '03462351008';
  const message = encodeURIComponent(`Hey, I would like to have ${checkitems}`);
  const whatsappLink = `https://wa.me/${mobileNumber}?text=${message}`;
  const storage=()=>{
    localStorage.clear()
  }
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
        {/* <ul className=' flex flex-col  items-end gap-6 '>
          {checkitems.map((item, index) => (
            <li key={index} className="text-white space-x-3 gap-10 flex">
              {item}                    <button className='  bg-red-600  text-white px-1'>Delete Item</button>

            </li>
          ))}
        </ul>               */}
        {/* <button onClick={() => handleRemove(index)}>Remove</button> */}

                    {/* <button className=' bg-red-400 p-2 rounded-lg'>Remove Item</button> */}
                    {/* <p>Total Amount</p> */}
                    {/* <Link href={https://wa.me/${process.env.MOBILE_NUMBER}?text="Hey, I would like to have Facebook monetization service"} target="_blank" >      </Link> */}
                    <Link href={whatsappLink}>
                    <button className=' bg-green-400 p-2 rounded-lg' onClick={ddd}>Send Order</button>    </Link>  
                    <button className=' bg-red-500 p-2 rounded-lg' onClick={storage}>Remove All Items</button>
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
