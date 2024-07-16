import { useLoaderData } from "@remix-run/react";
import { DiLaravel } from "react-icons/di";

export async function loader() {
    const userRoutes = await fetch("http://127.0.0.1:5000/my-gpx-files")
    return [userRoutes.json()]
}

export default function PlanRoutes() {
    let userRoutes = useLoaderData() as { id: string; filename: string;}[]
    return(
        <div>
            <div className="text-2xl text-custom-text">PlanRoutes</div>
            {userRoutes.map(route => (
                <div key={route.id}>
                    <h1>{route.filename}</h1>
                </div>
            ))}
        </div>

    ) 
}