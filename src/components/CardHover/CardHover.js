import './CardHover.scss'


export const CardHoverInfo = (data) => {
    const divHover = document.createElement('div');
    divHover.className = 'card-hover-info';

    const shareContainer = document.createElement('div');
    shareContainer.className = 'share-container';
  
    const likesE = document.createElement('p');
    likesE.className = 'card-likes';
    likesE.textContent = `${data.likes} ❤️`;
  
    const cameraIcon = document.createElement('span');
    cameraIcon.className = 'camera-icon';
    cameraIcon.textContent = '📸';

    const visitButton = document.createElement('button');
    visitButton.className = 'btn-primary';
    visitButton.textContent = 'Visitar';

    const breakLine = document.createElement('br');
  
    shareContainer.append(cameraIcon, likesE);
  
    divHover.append(shareContainer, visitButton, breakLine);

    return divHover;
  };
  
  export default CardHoverInfo;