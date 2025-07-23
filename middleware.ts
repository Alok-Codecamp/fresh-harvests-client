import { NextRequest, NextResponse } from "next/server";


export const config = {
    matcher:'/about'
}

export const middleware = (request:NextRequest)=>{
    console.log('first')
    return NextResponse.redirect(new URL('/blog',request.url))
}

