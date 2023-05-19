import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";


export const Layout = () => (
    <>
        <div className="container h-screen mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
    </>
);
