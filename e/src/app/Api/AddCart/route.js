import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

// export async function POST (req){
    
//   const dataa=await req.json();

//       console.log(dataa);
//       // console.log(d);
// //   const data=await prisma.user.create({
// //     data:{
// //       name:dataa.name,
// //       email:dataa.email,
// //       discription:dataa.discription
// //     }
// //   })
// //   return NextResponse.json(data)

// }

export async function POST(req) {
    const data= await req.json();
    console.log(data);
    let j=[]
    const jj=cookies().set("items",data.id)
    // console.log(req.cookies.get("items"));
    j=j.push(jj)
    
    const newC={
        item:data.id,
        Cart:j
    }
    return new NextResponse(JSON.stringify(newC),{
        headers:{
            "Content-Type":"application/json",
        },status:201,
    })
    // return NextResponse.json("hammad")

}

// export async function GET(req) {
// return NextResponse.json("hammad")
//     // console.log("hello");
// }