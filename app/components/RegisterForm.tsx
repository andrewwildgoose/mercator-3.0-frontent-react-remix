import { useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function RegisterForm({ isExpanded, onExpand }: { isExpanded: boolean; onExpand: () => void }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = {
            name: name,
            email: email,
            password: password,
        };

        const response = await fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            console.error("Error submitting form:", response.statusText);
            // Handle error if needed
            return;
        }

        // Handle success (optional)
        navigate("/dashboard"); // Navigate to dashboard or any other page on successful login
    }

    return (
        <div className="group relative flex flex-col justify-end items-center h-24 w-60 hover:cursor-pointer">
            <h2 
                className="text-2xl text-custom-text transition-transform duration-300 transform hover:-translate-y-1"
                onClick={onExpand}
                >REGISTER
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="absolute bottom-0 left-0 right-0 h-1">
                    <span className={`absolute w-full h-0.5 mb-px bg-opacity-100 bg-merc-blue group-hover:bg-opacity-100 transition-all duration-500 ease-in-out ${
                        isExpanded ? "h-20 top-4 bg-transparent" : "h-0.5 top-px bg-merc-blue"
                    } overflow-hidden`}>
                        <div className="mb-4 bg-black border-2 border-merc-blue">
                            <label htmlFor="name" className="block px-1 py-1 text-1xl text-custom-text">
                                name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={email}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 mb-1 block w-full px-2 py-1 bg-transparent caret-custom-text text-1xl text-custom-text focus:outline-none sm:text-sm"
                                required
                            />
                        </div>
                    </span>
                    <span className={`absolute w-full h-0.5 mb-px bg-opacity-100 bg-merc-yellow transition-all duration-500 ease-in-out ${
                        isExpanded ? "h-20 top-24 bg-transparent" : "h-0.5 top-1 bg-merc-yellow"
                    } overflow-hidden`}>
                        <div className="mb-4 bg-black border-2 border-merc-yellow">
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
                    <span className={`absolute w-full h-0.5 mb-px bg-opacity-100 bg-merc-green transition-all duration-500 ease-in-out ${
                        isExpanded ? "h-20 top-44 bg-transparent" : "h-0.5 top-[7px] bg-merc-green"
                    } overflow-hidden`}>
                        <div className="mb-4 bg-black border-2 border-merc-green">
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
                    <span className={`absolute w-full h-0.5 mb-px bg-opacity-100 bg-merc-green transition-all duration-500 ease-in-out ${
                        isExpanded ? "h-12 top-64 bg-transparent" : "h-0.5 top-[7px] bg-merc-green"
                    } overflow-hidden`}>
                        <div className={`h-0 mb-4 bg-transparent border-2 border-merc-green transition-all duration-500 ease-in-out ${
                        isExpanded ? "h-12 border-custom-text" : "h-0 border-merc-green"
                    } overflow-hidden`}>
                            <button
                            type="submit"
                            className="block w-full h-full bg-transparent text-1xl text-custom-text hover:bg-custom-text hover:text-black focus:outline-none"
                            >
                            REGISTER
                            </button>
                        </div>
                    </span>
                </div>
            </form>
        </div>
    );
}
