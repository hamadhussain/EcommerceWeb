import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data= await req.json();
    // console.log(data);
    // const j=cookies().set("items",data.id)
    // let dataa=cookies().getAll();
    // return NextResponse.json(dataa)
    // console.log(dataa);
    const cookieStore = cookies()
  const dataa=cookieStore.getAll()
    const newC={
        item:dataa
    }
    return new NextResponse(JSON.stringify(newC),{
        headers:{
            "Content-Type":"application/json",
        },status:201,
    })
}
