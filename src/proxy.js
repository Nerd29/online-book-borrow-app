import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
      const session = await auth.api.getSession({
        headers: await headers()
    })
    if (session) {
        return NextResponse.next()
    }

    console.log("Session in proxy:", session);
  return NextResponse.redirect(new URL('/login', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: [ '/my-profile','/bookDetails/:path*'],
}