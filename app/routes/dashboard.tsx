import DashboardBanner from "~/components/DashboardBanner";
import PlanComplete from "~/components/PlanComplete";
import Plan from "~/components/Plan";
import { useState } from "react";
import { Outlet } from "@remix-run/react";

export default function AfterAuth() {
    const [selectedPaths, setSelectedPaths] = useState<string[]>([]);

    const handleSelect = (option: string) => {
        setSelectedPaths((prevPaths) => [...prevPaths, option]);
    };

    const handleReset = () => {
        setSelectedPaths((prevPaths) => prevPaths.slice(0, -1));
    };

    return (
        <div className="h-full flex gap-20 flex-col">
            <DashboardBanner selectedPaths={selectedPaths} onReset={handleReset} />
            {selectedPaths.length === 0 && <PlanComplete onSelect={handleSelect} selectedPaths={selectedPaths} />}
            {selectedPaths[selectedPaths.length - 1] === "PLAN" && <Plan onSelect={handleSelect} selectedPaths={selectedPaths} />}
            {/* <Outlet /> */}
        </div>
    );
}
