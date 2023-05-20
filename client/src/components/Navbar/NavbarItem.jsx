import { NavLink } from "react-router-dom";

export const NavbarItem = ({ link, children }) => (
    <li>
        <NavLink
            className=
                {
                    ({ isActive }) => `
                    text-slate-600
                    drop-shadow-md
                    shadow-black
                    hover:text-slate-400
                    ${ isActive && 'text-orange-600' }`
                }
            to={ link }>{ children }
        </NavLink>
    </li>
)