import { useState, useEffect } from 'react';
import { Link } from "@remix-run/react";

export default function PlanComplete({ onSelect, selectedPaths }) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
    };

    useEffect(() => {
        if (!selectedPaths || !selectedPaths.length) {
            setSelectedOption(null);
        }
    }, [selectedPaths]);

    return (
        <div 
            id="plan_complete" 
            className={`relative p-4 h-full flex gap-20 flex-col justify-center items-center mt-24 transition-opacity duration-500 ${selectedOption ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ display: selectedOption ? 'none' : 'flex' }}
        >
            <Link
                to={"plan"}
                className={`relative flex flex-col h-24 w-60 justify-end items-center transition-opacity duration-500 ${selectedOption ? 'opacity-0' : 'opacity-100'}`}
                onClick={() => handleSelect("PLAN")}
            >
                <h2 className="mb-4 text-2xl text-custom-text transition-transform duration-300 transform hover:-translate-y-1">
                    PLAN
                </h2>
                <div className="absolute bottom-0 w-full flex flex-col items-center">
                    <span className="w-full h-0.5 bg-opacity-100 bg-merc-blue mb-px"></span>
                    <span className="w-full h-0.5 bg-opacity-100 bg-merc-yellow mb-px"></span>
                    <span className="w-full h-0.5 bg-opacity-100 bg-merc-green"></span>
                </div>
            </Link>
            <Link
                to={"complete"}
                className={`relative flex flex-col h-24 w-60 justify-end items-center transition-opacity duration-500 ${selectedOption ? 'opacity-0' : 'opacity-100'}`}
                onClick={() => handleSelect("COMPLETE")}
            >
                <h2 className="mb-4 text-2xl text-custom-text transition-transform duration-300 transform hover:-translate-y-1">
                    COMPLETE
                </h2>
                <div className="absolute bottom-0 w-full flex flex-col items-center">
                    <span className="w-full h-0.5 bg-opacity-100 bg-merc-blue mb-px"></span>
                    <span className="w-full h-0.5 bg-opacity-100 bg-merc-yellow mb-px"></span>
                    <span className="w-full h-0.5 bg-opacity-100 bg-merc-green"></span>
                </div>
            </Link>
        </div>
    );
}
