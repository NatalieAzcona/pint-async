import './Logo.scss';


export const Logo = () => {
    const link = document.createElement('a');
    link.href = '#'; 
    link.className = 'logo';

    const logo = document.createElement('img');
    logo.src = '../assets/pinterest.logo.png';
    logo.alt = 'Pinterest';
    logo.className = 'logo-img';
    
    link.appendChild(logo);

    return link;
}

