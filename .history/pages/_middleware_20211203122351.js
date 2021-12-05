import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

const {pathname} = req.nextUrl

  //Allow the requests if the following is true....
  //1.the token exists
}