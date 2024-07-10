import { Link, useNavigate } from "@remix-run/react";
import { json, useSubmit } from "@remix-run/react";
import { useState } from "react";

export default function ReisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = {
        email: email,
        password: password,
        name: name,
        };

        const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
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
        <div className="font-light font-sans p-4 h-screen flex gap-20 flex-col justify-center items-center">
            <div className="relative flex flex-col justify-end items-center h-24 w-40">
                <h2 className="text-2xl text-custom-text">REGISTER</h2>
                <span className="absolute bottom-0 left-0 right-0 h-1">
                    <span className="absolute w-full h-0.5 top-1 bg-opacity-100 bg-merc-blue"></span>
                    <span className="absolute w-full h-0.5 top-2 bg-opacity-100 bg-merc-yellow"></span>
                    <span className="absolute w-full h-0.5 top-3 bg-opacity-100 bg-merc-green"></span>
                </span>
            </div>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-1xl text-custom-text">
                    name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-1xl text-custom-text">
                    email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-1xl text-custom-text">
                    password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>
            <button
            type="submit"
            className="w-full text-2xl text-custom-text py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
            REGISTER
            </button>
        </form>
        </div>
    );
}
