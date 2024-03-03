import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
export async function GET(req:NextRequest){
    // run the logic
    const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data=response.data.slice(0,10);
    return NextResponse.json(data);
}