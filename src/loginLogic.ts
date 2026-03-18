export function validateLogin(username: string, password: string) {
    if (!username || !password) {
        return { success: false, message: "All fields are required" };
    }
    //Demo credentials (for learning only)
    if (username === "admin" && password === "1234") {
        return { success: true };
    }
    return { success: false, message: "Invalid username or password" };
}