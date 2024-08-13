import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import axios from 'axios';

export default function LoginForm({ isExpanded, onExpand }: { isExpanded: boolean; onExpand: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post("http://127.0.0.1:5000/login", formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                // Successful login
                console.log('Login successful');
                console.log('Login successful:', response.data);
                navigate("/dashboard"); // Navigate to dashboard or another page
            } else {
                // Handle unexpected status codes
                console.error('Unexpected response status:', response.status);
                setError('Login failed');
            }
        } catch (error) {
            // Handle errors
            if (error.response) {
                // Server responded with an error status code
                setError(error.response.data.message || 'Login failed');
            } else {
                // Network or other errors
                setError('Could not establish a connection to the server!');
            }
            console.error("Error submitting form:", error);
        }
    }

    return (
        <div className="group relative flex flex-col justify-end items-center h-24 w-60 hover:cursor-pointer">
            <h2 
                className="text-2xl text-custom-text transition-transform duration-300 transform hover:-translate-y-1"
                onClick={onExpand}
                >LOG IN
            </h2>
            <form onSubmit={handleSubmit}>
                <span className="absolute bottom-0 left-0 right-0 h-1">
                    <span className={`absolute w-full h-0.5 top-1 bg-opacity-50 bg-merc-blue group-hover:bg-opacity-100 transition-all duration-500 ease-in-out ${
                        isExpanded ? "h-20 top-4 bg-transparent" : "h-0.5 top-px bg-merc-blue"
                    } overflow-hidden`}>
                        <div className="mb-4 bg-black border-2 border-merc-blue">
                            <label htmlFor="email" className="block px-1 py-1 text-1xl text-custom-text">
                                email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 mb-1 block w-full px-2 py-1 bg-transparent caret-custom-text text-1xl text-custom-text focus:outline-none sm:text-sm"
                                required
                            />
                        </div>
                    </span>
                    <span className={`absolute w-full h-0.5 mb-px bg-opacity-100 bg-merc-yellow transition-all duration-500 ease-in-out ${
                        isExpanded ? "h-20 top-24 bg-transparent" : "h-0.5 top-1 bg-merc-yellow"
                    } overflow-hidden`}>
                        <div className="mb-4 bg-black border-2 border-merc-yellow">
                            <label htmlFor="password" className="block px-1 py-1 text-1xl text-custom-text">
                                password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 mb-1 block w-full px-2 py-1 bg-transparent caret-custom-text text-1xl text-custom-text focus:outline-none sm:text-sm"
                                required
                            />
                        </div>
                    </span>
                    <span className={`absolute w-full h-0.5 top-3 bg-opacity-100 bg-merc-green transition-all duration-500 ease-in-out ${
                        isExpanded ? "h-12 top-44 bg-transparent" : "h-0.5 top-[7px] bg-merc-green"
                    } overflow-hidden`}>
                        <div className={`h-0 mb-4 bg-transparent border-2 border-merc-green transition-all duration-500 ease-in-out ${
                        isExpanded ? "h-12" : "h-0"
                    } overflow-hidden`}>
                            <button
                            type="submit"
                            className="block w-full h-full bg-transparent text-1xl text-custom-text hover:bg-merc-green hover:text-black focus:outline-none"
                            >
                            LOG IN
                            </button>
                        </div>
                    </span>
                </span>
            </form>
        </div>
    );
}
