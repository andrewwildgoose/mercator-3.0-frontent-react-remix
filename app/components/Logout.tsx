import React from "react";
import { useNavigate } from "@remix-run/react";

export default function Logout() {
    const navigate = useNavigate();

    async function handleLogout() {

        const response = await fetch("http://127.0.0.1:5000/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            console.error("Error submitting form:", response.statusText);
            // Handle error if needed
            return;
        }

        // Handle success (optional)
        navigate("/"); // Navigate to dashboard or any other page on successful login
    }

    return (
        <button className="group relative flex flex-col justify-end items-center h-24 w-40 transition-transform duration-300 transform hover:-translate-y-1"
            onClick={handleLogout}
        >
            <div className="relative flex flex-col justify-end items-center h-24 w-40 ">
                <h2 className="text-2xl text-custom-text">LOG OUT</h2>
                <span className="absolute bottom-0 left-0 right-0 h-1">
                    <span className="absolute w-full h-0.5 top-1 bg-opacity-50 bg-merc-blue transition-opacity duration-200 group-hover:bg-opacity-100"></span>
                    <span className="absolute w-full h-0.5 top-2 bg-opacity-50 bg-merc-yellow transition-opacity duration-200 group-hover:bg-opacity-100"></span>
                    <span className="absolute w-full h-0.5 top-3 bg-opacity-50 bg-merc-green transition-opacity duration-200 group-hover:bg-opacity-100"></span>
                </span>
            </div>
        </button>
    );
}