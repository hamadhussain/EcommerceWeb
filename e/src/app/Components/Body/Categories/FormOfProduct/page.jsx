// // "use client"

// // import { zodResolver } from "@hookform/resolvers/zod"
// // // import { useForm } from "react-hook-form"
// // import { z } from "zod"

// // import { Button } from "@/components/ui/button"
// // import {
// //   Form,
// //   FormControl,
// //   FormDescription,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "@/components/ui/form"
// // import { Input } from "@/components/ui/input"

// // const formSchema = z.object({
// //   username: z.string().min(2, {
// //     message: "Username must be at least 2 characters.",
// //   }),
// // })

// // export function ProfileForm() {
// //   // ...

// //   return (
// //     <Form {...form}>
// //       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
// //         <FormField
// //           control={form.control}
// //           name="username"
// //           render={({ field }) => (
// //             <FormItem>
// //               <FormLabel>Username</FormLabel>
// //               <FormControl>
// //                 <Input placeholder="shadcn" {...field} />
// //               </FormControl>
// //               <FormDescription>
// //                 This is your public display name.
// //               </FormDescription>
// //               <FormMessage />
// //             </FormItem>
// //           )}
// //         />
// //         <Button type="submit">Submit</Button>
// //       </form>
// //     </Form>
// //   )
// // }

// // import { z } from "zod";
// // import { useForm } from "react-hook-form";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";

// // const formSchema = z.object({
// //   username: z.string().min(2, {
// //     message: "Username must be at least 2 characters.",
// //   }),
// // });

// // export function ProfileForm() {
// //   const { register, handleSubmit, formState: { errors } } = useForm({
// //     resolver: zodResolver(formSchema),
// //   });

// //   const onSubmit = (data) => {
// //     console.log(data);
// //     // Add your submission logic here
// //   };

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
// //       <div className="space-y-4">
// //         <label htmlFor="username" className="block font-medium text-gray-700">Username</label>
// //         <Input
// //           id="username"
// //           type="text"
// //           placeholder="Enter your username"
// //           {...register("username")}
// //           className={`border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-500 ${errors.username ? 'border-red-500' : ''}`}
// //         />
// //         {errors.username && <p className="text-red-500">{errors.username.message}</p>}
// //         <p className="text-sm text-gray-500">This is your public display name.</p>
// //       </div>
// //       <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</Button>
// //     </form>
// //   );
// // }

// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

// export function ProfileForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     // Add your submission logic here
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//       <div className="space-y-4">
//         <label htmlFor="username" className="block font-medium text-gray-700">Username</label>
//         <Input
//           id="username"
//           type="text"
//           placeholder="Enter your username"
//           {...register("username")}
//           className={`border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-500 ${errors.username ? 'border-red-500' : ''}`}
//         />
//         {errors.username && <p className="text-red-500">{errors.username.message}</p>}
//         <p className="text-sm text-gray-500">This is your public display name.</p>
//       </div>
//       <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</Button>
//     </form>
//   );
// }
'use client'
import React, { useState } from "react";

const Page = () => {
    const [color, setColor] = React.useState("");
    const [colorr, setColorr] = React.useState("");
    let arr=['sa','ds']

const handleSubmit=(e)=>{
  e.preventDefault()
arr.push(color)
console.log(arr);
}
for (const [index, value] of arr.entries()) {
  console.log(index, value);
}

  return (
    <div>
      <form action="" method="get" className="flex flex-col" onSubmit={handleSubmit}>
        {/* <input type="file" src="" alt=""  /> */}
        <input type="text" name="" className="text-black" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Enter Title" id="" />
        {/* <input type="text" name="" className="text-black" value={colorr} onChange={(e)=>setColorr(e.target.value)}  placeholder="Enter Category" id="" /> */}
        {/* <input type="text" name="" placeholder="Enter Discount Percentage"  id="" />
        <input type="text" name="" placeholder="Enter Stock"  id="" />
        <input type="text" name="" placeholder="Enter Brand"  id="" />
        <input type="text" name="" placeholder="Enter Description"  id="" />
        <input type="text" name="" placeholder="Enter Price"  id="" /> */}
        <button type="submit">click</button>
      </form>
    </div>
  );
};

export default Page;
