import checkMethod from "../server/utils/checkMethod"
import { NextResponse } from "next/server"


export function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/api/newFarm')) {
        return checkMethod(req)
    }
    return NextResponse.next()
}


// export const config = {
//     matcher: ["/api/:path*"]
// }