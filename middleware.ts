import { clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";


const isProtectedRoute = createRouteMatcher([
  '/'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req) && req.url !== '/api/uploadthing') {
    auth().protect(); 
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};