import { auth } from "./app/_lib/auth";
// User visits /account.
// Middleware runs → calls auth().
export const middleware = auth;

export const config = {
	matcher: ["/account"],
};

// import { NextResponse } from "next/server";

// export function middleware(request) {
// 	console.log(request);
// 	// run for every Route -> infinite loop /about
// 	return NextResponse.redirect(new URL("/about", request.url));
// }

// export const config = {
// 	// redirect these routes to /about
// 	matcher: ["/cabins", "account"],
// };
