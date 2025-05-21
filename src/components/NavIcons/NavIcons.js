import './NavIcons.scss';

export const NavIcons = () => {
    const navIcons = document.createElement('ul')
    navIcons.className = 'nav-icons';

    const items = [
        {emoji: '🔔', label: 'Notificaciones'},
        {emoji: '💬', label: 'Comentarios' },
        {emoji: 'D', label: 'Perfil' }
    ];

    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-icon-item';

        const button = document.createElement('button');
        button.className = 'nav-icon-button';
        button.textContent = item.emoji;
        button.setAttribute('title', item.label);

        li.appendChild(button);
        navIcons.appendChild(li);
    })
    return navIcons;
}