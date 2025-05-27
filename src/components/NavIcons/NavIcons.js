import './NavIcons.scss';

export const NavIcons = () => {
    const navIcons = document.createElement('ul')
    navIcons.className = 'nav-icons';

    const items = [
        {emoji: '🔔', label: 'Notificaciones', className: 'hide-mobile'} ,
        {emoji: '💬', label: 'Comentarios', className: 'hide-mobile'},
        {emoji: 'D', label: 'Perfil' }
    ];

    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-icon-item';

        if (item.className) {
            li.classList.add(item.className);
        }    

        const button = document.createElement('button');
        button.className = 'nav-icon-button';
        button.textContent = item.emoji;

        li.appendChild(button);
        navIcons.appendChild(li);
    })
    return navIcons;
}