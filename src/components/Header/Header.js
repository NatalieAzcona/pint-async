import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/Navbar';
import { NavIcons } from '../NavIcons/NavIcons';
import { NavList } from '../NavList/NavList';
import './Header.scss'


export const Header = () => {
    const header = document.createElement('header');
    header.className = 'header';

    const app = document.querySelector("#app");
    app.appendChild(header);
    
    const logo = Logo();
    const navlist = NavList();
    const navbar = NavBar();
    const navicons = NavIcons();

    header.append(logo, navlist, navbar, navicons);

    return header;
}