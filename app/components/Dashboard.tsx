import Logo from "~/components/Logo";
import Logout from "./Logout";

export default function Dashboard() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl text-custom-text">welcome to</h1>
            <Logo />
            <Logout />
        </div>
    );
}