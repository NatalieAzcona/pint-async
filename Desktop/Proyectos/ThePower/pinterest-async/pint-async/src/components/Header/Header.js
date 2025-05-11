import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/Navbar';
import './Header.scss'


export const Header = () => {
    const header = document.createElement('header');
    header.className = 'header';

    const app = document.querySelector("#app");
    app.appendChild(header);
    
    const logo = Logo();

    const navbar = NavBar();

    header.append(logo, navbar);

    return header;
}