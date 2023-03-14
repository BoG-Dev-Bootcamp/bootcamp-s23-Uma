import { NextResponse } from "next/server"

export default function checkMethod(req) {
    if (req.method != 'POST') {
        return new NextResponse(
            JSON.stringify({ success: false, error: "Invalid request method: " + req.method }),
            { status: 400 }
        )
    }
    return NextResponse.next()
} 