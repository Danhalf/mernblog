import { NavLink } from "react-router-dom";

export const NavbarItem = ({ link, children }) => (
    <li><NavLink className='text-sx text-gray-400 hover:text-gray-600' to={ link }>{ children }</NavLink></li>
)