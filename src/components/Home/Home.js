import printImages from '../utils/printImages';
import './Home.scss';

const Home = () => {
    const homeContainer = document.createElement('div');
    homeContainer.className = 'home-container';

    const imagesContainer = document.createElement('ul');
    imagesContainer.className = 'images-container'

    homeContainer.appendChild(imagesContainer);

    return homeContainer;
};

export default Home;