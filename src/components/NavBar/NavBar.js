import './NavBar.scss';
import fetchApi from '../utils/fetchApi';


export const NavBar = () => {

    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const searchInput = document.createElement('input');
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Buscar...'
    searchInput.addEventListener('keydown', async (e) => {
        if(e.key === 'Enter') {
            await fetchApi(e.target.value)
        }
    })

    const searchButton = document.createElement('button');
    searchButton.className = 'search-button';
    searchButton.textContent = '🔎'

    nav.append(searchInput, searchButton);

    return nav;
}