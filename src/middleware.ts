import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {getCookie} from "cookies-next";
import {getUser} from "@/services/users";
import {cookies} from "next/headers";
import {UserInterface} from "@/interfaces/interfaces";


export async function middleware(request: NextRequest) {
    const accessToken = await getCookie("accessToken", {cookies});
    if (request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/register")) {
        if (accessToken) return NextResponse.redirect(new URL('/', request.url));
    }
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        if (!accessToken) {
            return NextResponse.redirect(new URL('/login', request.url))
        } else {
            const user: UserInterface = await getUser(accessToken);
            if (user.role !== "admin") {
                return NextResponse.redirect(new URL('/', request.url))
            }
            return NextResponse.next();
        }
    }
    return NextResponse.next();
}