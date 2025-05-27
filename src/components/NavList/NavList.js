import './NavList.scss';

export const NavList = () => {
    const navList = document.createElement('ul')
    navList.className = 'nav-list';

    const items = [
        {name: 'Inicio', link: '#inicio'},
        {name: 'Explorar', link: '#explorar'},
        {name: 'Crear', link: '#crear'}
    ];

    items.forEach(item => {
        const li = document.createElement('li');

        const link = document.createElement('a');
        link.className = 'nav-item  btn-secondary';
        link.href = item.link;
        link.textContent = item.name;

        li.appendChild(link);
        navList.appendChild(li);
    })
    return navList;
}