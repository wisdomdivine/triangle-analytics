import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isTokenExpired(token: string | null | undefined): boolean {
  if (!token || typeof token !== "string") return true;
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return true;
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
    const jsonPayload = decodeURIComponent(
      atob(padded)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    const payload = JSON.parse(jsonPayload);
    if (typeof payload.exp !== "number") return false;
    return Date.now() / 1000 >= payload.exp - 10;
  } catch {
    return true;
  }
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const isExpired = !token || isTokenExpired(token);
  const { pathname } = request.nextUrl;

  const protectedRoutes = [
    "/overview",
    "/visitors",
    "/events",
    "/domains",
    "/profile",
    "/dashboard",
    "/auth/claim-onboarding",
  ];

  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  // If user requests /dashboard, redirect to /overview
  if (pathname === "/dashboard" || pathname.startsWith("/dashboard/")) {
    return NextResponse.redirect(new URL("/overview", request.url));
  }

  const authRoutes = ["/auth/signin", "/auth/join"];
  const isAuthRoute = authRoutes.some((route) => pathname === route);

  // If trying to access a protected route with missing or expired token, redirect to signin
  if (isProtectedRoute && isExpired) {
    const signInUrl = new URL("/auth/signin", request.url);
    signInUrl.searchParams.set("redirect", pathname);
    const response = NextResponse.redirect(signInUrl);
    if (token) {
      response.cookies.delete("auth_token");
    }
    return response;
  }

  // If already authenticated with valid token and accessing login/join pages, redirect to overview
  if (isAuthRoute && !isExpired) {
    return NextResponse.redirect(new URL("/overview", request.url));
  }

  // If accessing auth routes with expired token, clear stale cookie
  if (isAuthRoute && token && isExpired) {
    const response = NextResponse.next();
    response.cookies.delete("auth_token");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/overview/:path*",
    "/visitors/:path*",
    "/events/:path*",
    "/domains/:path*",
    "/profile/:path*",
    "/dashboard/:path*",
    "/auth/:path*",
  ],
};
