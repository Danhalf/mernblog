import { create, login, main, posts, exit } from "../../constants/links";
import { NavbarItem } from "./NavbarItem";
import { useState } from "react";

export const Navbar = () => {
    const [ isAuthorized, setIsAuthorized ] = useState(false);
    const authLink = isAuthorized ? exit : login;
    const activeLinks = [ posts, create ];
    return (
        <>
            <nav className='flex py-4  items-center'>
                <ul className="flex w-full justify-between gap-x-8">
                    <NavbarItem link={ main.link }>{ main.text }</NavbarItem>
                    { isAuthorized && activeLinks.map(({ text, link }) =>
                        <NavbarItem key={ `${ link }${ text }` } link={ link }>{ text }</NavbarItem>
                    ) }
                    <NavbarItem link={ authLink.link }>{ authLink.text }</NavbarItem>

                </ul>

            </nav>
            <div>
                <button className='rounded-md bg-red-300 p-4' onClick={ () => setIsAuthorized(!isAuthorized) }> Change Auth</button>
            </div>
        </>
    )
};
