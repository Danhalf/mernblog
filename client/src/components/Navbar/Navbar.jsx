import { create, login, main, posts, register } from "../../constants/links";
import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {

    const activeLinks = [ main, create, login, posts, create, register ];
    console.log(activeLinks.map(({ text, link }) => `${ text }: ${ link }`))
    return (
        <nav className='flex py-4 justify-between items-center'>
            <ul className="flex w-full gap-x-8">
                { activeLinks.map(({ text, link }) =>
                    <NavbarItem link={ link }>{ text }</NavbarItem>
                ) }
            </ul>
        </nav>)
};
