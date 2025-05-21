import './Card.scss';

const Card = (imageData) => {

        if (!imageData || !imageData.urls || !imageData.urls.small) {
        console.warn('Datos incompletos en Card:', imageData);
        return document.createElement('li');
        }

        const cardContainer = document.createElement('div');
        
        const cardClasses = ['card--h1', 'card--h2', 'card--h3'];
        const randomClass = heightClasses[Math.floor(Math.random() * heightClasses.length)];
        cardContainer.className = `card ${randomClass}`;

        cardContainer.style.backgroundImage = `url(${imageData.urls.small})`;
        
        const image = document.createElement('img');
        image.src = imageData.urls.small;
        image.className = 'card-image';

        const imageOwnerContainer = document.createElement('div');
        imageOwnerContainer.className = 'image-owner-container';

        const authorImage = document.createElement('img');
        authorImage.src = imageData.user.profile_image.small;
        authorImage.className = 'author-image';

        const imageOwner = document.createElement('p');
        imageOwner.className = 'image-owner';
        imageOwner.textContent = `${imageData.user?.first_name || ''} ${imageData.user?.last_name || ''}`;

        imageOwnerContainer.append(authorImage, imageOwner);

        const uploadDate = document.createElement('p');
        uploadDate.className = 'upload-date';
        const date = new Date(imageData.created_at);
        uploadDate.textContent = `Subido el: ${date.toLocaleDateString()}`;

        const likes = document.createElement('p');
        likes.className = 'card-likes';
        likes.textContent = `${imageData.likes} ❤️` 

        const cameraContainer = document.createElement('div');
        cameraContainer.className = 'camera-container';
    
        const cameraIcon = document.createElement('span');
        cameraIcon.className = 'camera-icon';
        cameraIcon.textContent = '📸'; 

        const downloads = document.createElement('p');
        downloads.className = 'card-shares';
        downloads.textContent = `${imageData.downloads}`;

        cameraContainer.append(cameraIcon, downloads);

        cardContainer.append(image, imageOwnerContainer, uploadDate, likes, cameraContainer)
        return cardContainer;
}

export default Card;
