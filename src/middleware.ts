export default function middleware(request: Request) {
  // Middleware logic can be added here
  // For example, you can log the request or modify it
  console.log("Middleware triggered for:", request.url);

  // You can also return a response if needed
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
