import './CardHover.scss'


export const CardHoverInfo = (data) => {
    const divHover = document.createElement('div');
    divHover.className = 'card-hover-info';

    const shareContainer = document.createElement('div');
    shareContainer.className = 'share-container';
  

    //likes 
    const likesE = document.createElement('div');
    likesE.className = 'card-likes';
    
    const likeIcon = document.createElement('span');
    likeIcon.className = 'like-icon';
    likeIcon.textContent = '❤️';
    
    const likeCount = document.createElement('span');
    likeCount.className = 'like-count';
    likeCount.textContent = data.likes;
    
    likesE.append(likeIcon, likeCount);

    //Camera
  
    const cameraIcon = document.createElement('span');
    cameraIcon.className = 'camera-icon';
    cameraIcon.textContent = '📸';

    //visitButton

    const visitButton = document.createElement('button');
    visitButton.className = 'btn-primary';
    visitButton.textContent = 'Visitar';

    const breakLine = document.createElement('br');
  
    shareContainer.append(cameraIcon, likesE);
  
    divHover.append(shareContainer, visitButton, breakLine);

    return divHover;
  };
  
  export default CardHoverInfo;