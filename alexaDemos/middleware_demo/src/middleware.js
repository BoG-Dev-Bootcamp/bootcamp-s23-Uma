import { NextResponse } from "next/server"

export function middleware(req) {
    const { pathname } = req.nextUrl
    if (pathname == '/api/postOnly') {
        if (req.method != 'POST') {
            return new NextResponse(
                JSON.stringify({ success: false, error: "Invalid request method: " + req.method}),
                { status: 400 }
            )
        }
        return NextResponse.next()
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/api/:path*"]
}