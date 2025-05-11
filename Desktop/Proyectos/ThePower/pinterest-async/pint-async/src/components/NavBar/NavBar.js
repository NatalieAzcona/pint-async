import './NavBar.scss';


export const NavBar = () => {

    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const searchInput = document.createElement('input');
    searchInput.className = 'search-input';
    searchInput.placeHolder = 'Buscar...'

    const searchButton = document.createElement('button');
    searchButton.className = 'search-button';
    searchButton.textContent = 'Buscar'

    nav.append(searchInput, searchButton);

    return nav;
}