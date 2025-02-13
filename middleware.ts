import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/", "/sign-in*", "/sign-up*", "/api/webhook/clerk"];

function isPublic(path: string) {
    return publicPaths.find(x => 
        path.match(new RegExp(`^${x}$`.replace('*', '.*')))
    );
}

export default clerkMiddleware((auth, req: NextRequest) => {
    if (isPublic(req.nextUrl.pathname)) {
        return NextResponse.next();
    }
    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};