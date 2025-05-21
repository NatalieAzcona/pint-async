import './CardHover.scss'


export const CardHoverInfo = (data) => {
    const divHover = document.createElement('div');
    divHover.className = 'card-hover-info';
  
    const visitButton = document.createElement('button');
    visitButton.className = 'visit-button';
    visitButton.textContent = 'Visitar';
  
    const likesE = document.createElement('p');
    likesE.className = 'card-likes';
    likesE.textContent = `${data.likes} ❤️`;
  
    const cameraContainer = document.createElement('div');
    cameraContainer.className = 'camera-container';
  
    const cameraIcon = document.createElement('span');
    cameraIcon.className = 'camera-icon';
    cameraIcon.textContent = '📸';
  
    cameraContainer.append(cameraIcon);
  
    divHover.append(visitButton, likesE, cameraContainer);
  
    return divHover;
  };
  
  export default CardHoverInfo;