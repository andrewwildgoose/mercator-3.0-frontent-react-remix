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
            return;
        }

        navigate("/"); // Navigate to the homepage or any other page on successful logout
    }

    const goToProfile = () => {
        navigate("/profile");
    };

    return (
        <div className="flex flex-row items-end">
            <button
                className="relative flex flex-col items-center justify-end h-24 w-24 hover:cursor-pointer"
                onClick={goToProfile}
            >
                <h2 className="text-1xl text-custom-text transition-transform duration-300 transform hover:-translate-y-1">
                    PROFILE
                </h2>
            </button>
            <div className="w-0.5 h-6 bg-opacity-100 bg-custom-text"></div>
            <button
                className="relative flex flex-col items-center justify-end h-24 w-24 hover:cursor-pointer"
                onClick={handleLogout}
            >
                <h2 className="text-1xl text-custom-text transition-transform duration-300 transform hover:-translate-y-1">
                    LOG OUT
                </h2>
            </button>
        </div>
    );
}
