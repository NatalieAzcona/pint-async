import CardHoverInfo from '../CardHover/CardHover';
import './Card.scss';


const Card = (imageData) => {

        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        
        const card = document.createElement('div');
        card.className = 'card'
        card.style.backgroundImage = `url(${imageData.urls.regular})`;
        
        const cardInfo = document.createElement('div');
        cardInfo.className = 'card-info';

        const imageOwnerContainer = document.createElement('div');
        imageOwnerContainer.className = 'image-owner-container';

        const authorImage = document.createElement('img');
        authorImage.src = imageData.user.profile_image.medium;
        authorImage.className = 'author-image';

        const imageOwner = document.createElement('p');
        imageOwner.className = 'image-owner';
        imageOwner.textContent = `${imageData.user?.first_name || ''} ${imageData.user?.last_name || ''}`;

        const uploadDate = document.createElement('p');       
        uploadDate.className = 'upload-date';
        const date = new Date(imageData.created_at);
        uploadDate.textContent = `Subido el: ${date.toLocaleDateString()}`;

        imageOwnerContainer.append(authorImage, imageOwner);
        cardInfo.append(imageOwnerContainer, uploadDate);

        cardContainer.append(card, cardInfo);

        return cardContainer;
};

export default Card;
