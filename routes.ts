//theese are the routes that don't require authentiication

export const publicRoutes = [
    "/",
    "/auth/new-verification",
    
]

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
]


// the prefix for apiauthentication routes,routes that start with this prefix are used for API authentication purposes
export const apiAuthPrefix = "/api/auth";
// the default redirect path after loggin in
export const DEFAULT_LOGIN_REDIRECT  = "/settings";