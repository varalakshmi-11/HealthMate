import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "./loginLogic";
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = validateLogin(username, password);
        if (!result.success) {
            setError(result.message || "");
            return;
        }
        navigate("/settings");
    };
    return (
        <div className="max-w-sm mx-auto mt-20 p-6 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            {error && <p className="text-red-500 mb-3">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    className="border p-2 mb-3 w-full"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 mb-3 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-blue-600 text-while px-4 py-2 w-full">Login</button>
            </form>
            <p className="mt-4 text-center">
                <a href="/" className="text-blue-500">Return to homepage</a>
            </p>
        </div>
    );
}
