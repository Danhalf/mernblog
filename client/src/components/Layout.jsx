import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const Layout = () => (
    <>
        <div className="container h-screen mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
        <ToastContainer position='bottom-right'/>
    </>
);
