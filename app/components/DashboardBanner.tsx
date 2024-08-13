import Logo from "~/components/Logo";
import Logout from "./Logout";
import { SlArrowLeft } from "react-icons/sl";
import { Transition } from '@headlessui/react'
import { Link, useNavigate } from "@remix-run/react";

export default function DashboardBanner({ selectedPaths, onReset }: { selectedPaths: string[]; onReset: () => void }) {
    const currentPath = selectedPaths.length ? selectedPaths[selectedPaths.length - 1] : null;
    console.log(selectedPaths)
    console.log(selectedPaths.slice(0,-1))
    console.log(selectedPaths.slice(-1))

    const navigate = useNavigate();

    const handleBackClick = () => {
      navigate(-1); // Navigate back to the previous page
    };
  
    return (
        <div className="absolute top-0 left-0 w-full h-24">
            <div className="flex flex-row items-end justify-between w-full h-full px-8 py-4">
                <Logo />
                <Transition show={true} appear={true}>
                    <div className="absolute bottom-0 w-full flex flex-col items-center transition duration-500 ease-in data-[closed]:opacity-0">
                        {currentPath && (
                            <button className="absolute left-1/3 transform -translate-x-full bottom-0 mb-4 text-2xl text-custom-text" 
                            onClick={() => {
                                handleBackClick();
                                onReset();
                            }}>
                                <SlArrowLeft />
                            </button>                            
                        )}
                        <h3 className="transform -translate-x-1/2 bottom-0 mb-1 text-1xl text-custom-text">
                            {selectedPaths.slice(0,-1).join(" > ")}
                        </h3>
                        <h2 className="transform -translate-x-1/2 bottom-0 mb-4 text-2xl text-custom-text">
                            {selectedPaths.slice(-1)}
                        </h2>
                    </div>                    
                </Transition>
                <Logout />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col items-center">
                <span className="w-full h-0.5 bg-opacity-100 bg-merc-blue mb-px"></span>
                <span className="w-full h-0.5 bg-opacity-100 bg-merc-yellow mb-px"></span>
                <span className="w-full h-0.5 bg-opacity-100 bg-merc-green"></span>
            </div>
        </div>
    );
}
