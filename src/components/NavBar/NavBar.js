import './NavBar.scss';
import printImages from '../utils/printImages';


export const NavBar = () => {

    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const searchInput = document.createElement('input');
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Buscar...'
    searchInput.addEventListener('keydown', async (e) => {
        if(e.key === 'Enter') {
            await printImages(e.target.value)
        }
    })

    const searchButton = document.createElement('button');
    searchButton.className = 'search-button';
    searchButton.textContent = '🔎'
    searchButton.addEventListener('click', async () => {
        await printImages(searchInput.value);
    })

    searchContainer.append(searchButton, searchInput);
    nav.append(searchContainer);

    return nav;
}